const express = require("express");

const router = express.Router();
const { getAllProducts, addProduct } = require("../controllers/product");

const {
  addCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
} = require("../controllers/category");

router.route("/category/add-category").post(addCategory);
router.route("/category/").get(getAllCategories);
router.route("/category/:id").patch(editCategory).delete(deleteCategory);

router.route("/product/").get(getAllProducts);
router.route("/product/add-product").post(addProduct);

module.exports = router;
