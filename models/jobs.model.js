const mongoose = require("mongoose");
const JobsSchema = mongoose.Schema({
  _id: Object,
  job_title: String,
  company: String,
  location: String,
  start_date: String,
  end_date: String,
  company_url: String,
  description: String,
});
module.exports = mongoose.model("Jobs", JobsSchema);
