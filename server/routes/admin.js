const express = require("express");

const router = express.Router();

const { addCategory, editCategory } = require("../controllers/admin");

router.route("/category/add-category").post(addCategory);
router.route("/category/:id").patch(editCategory);

module.exports = router;
