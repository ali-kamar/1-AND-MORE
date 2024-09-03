const jwt = require("jsonwebtoken");
require("dotenv").config();
const { StatusCodes } = require("http-status-codes");

const authorize = async (req, res, next) => {
  try {
    const jwtToken = req.headers.authorization;
    const token = jwtToken && jwtToken.split(" ")[1];

    if (!token) {
      return res.status(StatusCodes.FORBIDDEN).json("Not Authorize");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload.user;

    next();
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCodes.FORBIDDEN).json("Not Authorize");
  }
};

module.exports = authorize;
