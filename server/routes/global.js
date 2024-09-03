const express = require("express");

const router = express.Router();

const { getAllProducts, getProduct } = require("../controllers/product");

router.route("/product").get(getAllProducts);
router.route("/product/:id").get(getProduct);

module.exports = router
