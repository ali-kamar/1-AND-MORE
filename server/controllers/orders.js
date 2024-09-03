const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getOrders = async (req, res) => {
  const { status } = req.query;

  if (!status) {
    throw new BadRequestError("Status is required");
  }

  const result = await pool.query(
    `SELECT * FROM orders WHERE order_status = $1`,
    [status]
  );

  if (result.rows.length === 0) {
    throw new NotFoundError("No orders found");
  }

  res.status(StatusCodes.OK).json(result.rows);
};

module.exports = { getOrders };
