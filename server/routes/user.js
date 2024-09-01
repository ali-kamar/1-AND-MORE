const express = require("express");

const router = express.Router();

const { getAccount, updateAccount } = require("../controllers/user");

router.route("/:id").get(getAccount).patch(updateAccount);

module.exports = router