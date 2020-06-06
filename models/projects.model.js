const mongoose = require("mongoose");

const ProjectsSchema = mongoose.Schema({
  primary_technologies: Array,
  secondary_technologies: Array,
  title: String,
  web_url: String,
  github: Array,
  description: String,
  desktop_image: String,
  tablet_image: String,
  mobile_image: String,
  year_built: Date,
});

module.exports = mongoose.model("Projects", ProjectsSchema);
