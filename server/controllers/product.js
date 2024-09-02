const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProducts = async (req, res) => {
  const products = await pool.query("SELECT * FROM products");

  res.status(StatusCodes.OK).json(products.rows);
};

const getProduct = async (req, res) => {
  const {id} = req.params

  const product = await pool.query("SELECT * FROM products WHERE product_id = $1", [id]);

  if(product.rows.length === 0){
    throw new NotFoundError('No product found')
  }

  res.status(StatusCodes.OK).json(product.rows[0]);
};

const addProduct = async (req, res) => {
  const { name, description, price, imageURL, category, isAvailable } =
    req.body;

  if(!name || !price || !imageURL || !category){
    throw new BadRequestError("Missing values");
  }
  
  const fields = [];
  const values = [];

  // Dynamically populate fields and values based on available data
  if (name) {
    fields.push("name");
    values.push(name);
  }
  if (description !== undefined) {
    fields.push("description");
    values.push(description || null); // Use null if description is an empty string
  }
  if (price) {
    fields.push("price");
    values.push(price);
  }
  if (imageURL) {
    fields.push("imageUrl");
    values.push(imageURL);
  }
  if (category) {
    fields.push("category");
    values.push(category);
  }
  if (isAvailable !== undefined) {
    fields.push("isAvailable");
    values.push(isAvailable);
  }

  // Construct the query string
  const queryFields = fields.join(", ");
  const queryPlaceholders = fields
    .map((_,index) => `$${index + 1}`)
    .join(", ");
  const query = `INSERT INTO products (${queryFields}) VALUES (${queryPlaceholders}) RETURNING *`;

   const result = await pool.query(query, values);

  res.status(StatusCodes.CREATED).json(result.rows[0]);
};

module.exports = { getAllProducts, addProduct, getProduct };
