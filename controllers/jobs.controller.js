const Jobs = require("../models/jobs.model");

exports.create = (req, res) => {
  Jobs.create(req.body, (err, newJob) => {
    if (err) res.status(500).end();
    return res.json(newJob);
  });
};

exports.findAll = (req, res) => {
  Jobs.find({}, (err, jobs) => {
    if (err) res.status(500).end();
    return res.json(jobs);
  });
};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
