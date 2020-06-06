const mongoose = require("mongoose");

const LabSchema = mongoose.Schema(
  {
    title: String,
  },
  { collection: "lab" }
);

module.exports = mongoose.model("Lab", LabSchema);
