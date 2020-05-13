const mongoose = require("mongoose");
const JobsSchema = mongoose.Schema(
  {
    job_title: String,
    company: String,
    location: String,
    start_date: String,
    end_date: String,
    technologies: Array,
    company_url: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Jobs", JobsSchema);
