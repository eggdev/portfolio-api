const mongoose = require("mongoose");

const ProjectsSchema = mongoose.Schema({
  title: String,
  image: String,
  web_url: String,
  description: String,
  github_fe: String,
  github_api: String,
  year_built: Number,
  primary_technologies: Array,
  secondary_technologies: Array,
});

module.exports = mongoose.model("Projects", ProjectsSchema);
