require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./config/db.config.js");

const ProjectRoutes = require("./routes/projects.routes");

const PORT = process.env.PORT || 8080;
const app = express();
const acceptedOrigins = [
  "http://localhost:3000",
  "http://stage.eggers.dev",
  "http://eggers.dev",
  "https://eggers.dev",
];

// App Utils
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (acceptedOrigins.indexOf(origin) === -1) return;
      return cb(null, true);
    },
    optionsSuccessStatus: 200,
  })
);

// Database connection
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successful connection to db");
  })
  .catch((err) => {
    console.log("Could not connect to db...", err);
    process.exit();
  });

app.get("/", (req, res) =>
  res.json({ message: "no Route matched with those values" })
);

app.listen(PORT, () => {
  console.log(`Spinning on ${PORT}`);
  ProjectRoutes(app);
});
