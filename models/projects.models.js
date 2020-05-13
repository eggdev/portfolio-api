const mongoose = require("mongoose");
const ProjectsSchema = mongoose.Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Projects", ProjectsSchema);
