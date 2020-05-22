const mongoose = require("mongoose");

const ProjectsSchema = mongoose.Schema({
  primary_technologies: Array,
  secondary_technologies: Array,
  title: String,
  web_url: String,
  github: Array,
  description: String,
  image: String,
  year_built: Number,
});

module.exports = mongoose.model("Projects", ProjectsSchema);
