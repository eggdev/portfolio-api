require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config.js");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

const ProjectRoutes = require("./routes/projects.routes");
const JobRoutes = require("./routes/jobs.routes");
const LabRoutes = require("./routes/lab.routes");
const TwilioRoutes = require("./routes/twilio.routes");

const acceptedOrigins = [
  process.env.LOCAL_DOMAIN,
  "https://remix.eggers.dev",
  "https://eggers.dev",
];

// App Utils
const CORSOptions = (req, cb) => {
  const originUsed = req.header("Origin");
  const isAccepted = acceptedOrigins.indexOf(originUsed) !== -1;
  cb(null, { origin: isAccepted });
};

app.use(cors(CORSOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.listen(PORT, () => {
  console.log(`Spinning on ${PORT}`);
  ProjectRoutes(app);
  JobRoutes(app);
  LabRoutes(app);
  TwilioRoutes(app);
});
