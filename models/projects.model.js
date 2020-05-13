const mongoose = require("mongoose");

const ProjectsSchema = mongoose.Schema({
  title: String,
  description: String,
  github_url: String,
  web_url: String,
  technologies: Array,
  traffic: String,
  image: String,
});
module.exports = mongoose.model("Projects", ProjectsSchema);
