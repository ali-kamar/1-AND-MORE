const express = require("express");

const router = express.Router();

const {
  addCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
} = require("../controllers/category");

router.route("/category/add-category").post(addCategory);
router.route("/category/").get(getAllCategories);
router.route("/category/:id").patch(editCategory).delete(deleteCategory);

module.exports = router;
