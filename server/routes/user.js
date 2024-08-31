const express = require("express");

const router = express.Router();

const { account, updateAccount } = require("../controllers/user");

router.route("/:id").get(account).post(updateAccount);

module.exports = router