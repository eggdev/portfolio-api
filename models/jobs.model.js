const mongoose = require("mongoose");
const JobsSchema = mongoose.Schema(
  {
    job_title: String,
    company: String,
    location: String,
    start_date: String,
    end_date: String,
    company_url: String,
    description: String,
  },
  { collection: "jobs" }
);
module.exports = mongoose.model("Jobs", JobsSchema);
