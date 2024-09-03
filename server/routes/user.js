const express = require("express");

const router = express.Router();

const {
  getAccount,
  updateAccount,
  addToWishlist,
  getWishlist,
  deleteWishlist,
} = require("../controllers/user");

router.route("/account/:id").get(getAccount).patch(updateAccount);
router.route("/wishlist/add-wishlist").post(addToWishlist);
router.route("/wishlist").get(getWishlist);
router.route("/wishlist/:id").delete(deleteWishlist);

module.exports = router