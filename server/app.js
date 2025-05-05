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

app.use(express.json());

// extra packages
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
const allowedOrigins = [
  "https://1-and-more.vercel.app",
  "https://1-and-more-git-main-alis-projects-53e71da3.vercel.app/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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
