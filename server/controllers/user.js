const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { UserError, BadRequestError, NotFoundError } = require("../errors");

const getAccount = async (req, res) => {
  const userId = req.params.id;
  const user = await pool.query(
    "SELECT user_email,user_name FROM users WHERE user_id = $1",
    [userId]
  );
  let email = user.rows[0].user_email;
  let name = user.rows[0].user_name;
  res.status(StatusCodes.OK).json({ email, name });
};

const updateAccount = async (req, res) => {
  const userId = req.params.id;
  const { email, name } = req.body;

  const fields = [];
  const values = [];

  if (email) {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) throw new UserError("email already exists");
    fields.push("user_email = $1");
    values.push(email);
  }
  if (name) {
    fields.push("user_name = $2");
    values.push(name);
  }

  if (fields.length === 0) {
    throw new BadRequestError("No data provided to update");
  }

  // Add userId as the last parameter
  values.push(userId);

  // Construct and execute the dynamic query
  const query = `UPDATE users SET ${fields.join(", ")} WHERE user_id = $3`;
  const newUser = await pool.query(query, values);

  // Return success response
  res.status(StatusCodes.OK).json({ message: "Account updated successfully" });
};

const addOrder = async (req, res) => {
  const { user_id, product_id, quantity, address, name, phone } =
    req.body;

  // Validate required fields
  if (!user_id || !product_id || !quantity || !address || !name || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const result = await pool.query(
    `INSERT INTO orders (user_id, product_id, quantity, address, name, phone)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [
      user_id,
      product_id,
      quantity,
      address,
      name,
      phone,
    ]
  );

  res.status(201).json(result.rows[0]);
};

module.exports = {
  getAccount,
  updateAccount,
  addOrder,
};
