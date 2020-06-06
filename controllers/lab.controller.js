const Lab = require("../models/lab.model");

exports.findAll = (req, res) => {
  Lab.find({}, (err, lab_data) => {
    if (err) res.status(500).end();
    return res.json(lab_data);
  });
};
