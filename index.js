require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("config/db.config.js");

const ProjectRoutes = require("routes/projects.routes");

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

app.listen(PORT, () => {
  console.log("Spinning");
  ProjectRoutes(app);
});
