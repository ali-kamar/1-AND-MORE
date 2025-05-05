require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

const authenticationRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const globalRouter = require("./routes/global");
const authenticate = require("./middleware/authentication");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const corsOptions = {
  origin: "https://1-and-more.vercel.app", // Allow Vercel's domain
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

// Use CORS middleware
app.use(cors(corsOptions));

app.use(express.json());

// extra packages
app.set("trust proxy", 1);
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
//   })
// );
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(xss());
// routes
app.use("/api/v1/auth", authenticationRouter);
app.use("/api/v1/user", authenticate, userRouter);
app.use("/api/v1/admin", authenticate, adminRouter);
app.use("/api/v1/global", globalRouter);

// app.get('/', (req, res) => {
//   res.send('<h1>Todo-List</h1>');
// });

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 10000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
