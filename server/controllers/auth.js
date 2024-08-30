const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const { UserError } = require("../errors");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE user-email = $1", [
    email,
  ]);

  if (user.rows.length !== 0) {
    throw new UserError("user already exists");
  }

  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);

  const bcryptPassword = await bcrypt.hash(password, salt);

  const newUser = await pool.query(
    "INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *",
    [name, email, bcryptPassword]
  );

  const token = jwtGenerator(newUser.rows[0].user_id);

  res.status(StatusCodes.OK).json({ token, user_id: newUser.rows[0].user_id });
};

module.exports = { register };
