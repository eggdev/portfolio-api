const Lab = require("../models/lab.model");

exports.findAll = (req, res) => {
  Lab.find({}, (err, labs) => {
    console.log(res);
    if (err) res.status(500).end();
    return res.json(labs);
  });
};
