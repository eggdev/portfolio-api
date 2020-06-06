const mongoose = require("mongoose");
const LabSchema = mongoose.Schema({
  primary_technologies: Array,
  secondary_technologies: Array,
  github: Array,
  title: String,
  web_url: String,
  description: String,
});
module.exports = mongoose.model("Lab", LabSchema);
