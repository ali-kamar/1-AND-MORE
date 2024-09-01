const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProducts = async (req, res) => {
  const categories = await pool.query("SELECT * FROM products");

  res.status(StatusCodes.OK).json(categories.rows);
};

const addProduct = async (req, res) => {
  const { name, description, price, imageURL, category, isAvailable } =
    req.body;

  // Check if the category already exists
  const existingCategory = await pool.query(
    "SELECT * FROM categories WHERE category_name ILIKE $1",
    [categoryName]
  );

  if (existingCategory.rows.length > 0) {
    throw new BadRequestError("Category already exists");
  }

  // Insert new category
  const updatedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();

  const newCategory = await pool.query(
    "INSERT INTO categories (category_name) VALUES ($1) RETURNING *",
    [updatedCategoryName]
  );

  res.status(StatusCodes.CREATED).json(newCategory.rows[0]);
};

module.exports = { getAllProducts };
