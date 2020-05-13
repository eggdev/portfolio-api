const Projects = require("../models/projects.models");

exports.create = (req, res) => {
  const { body } = req;

  Projects.create(body, (err, newProject) => {
    if (err) res.status(500).end();
    return res.json(newProject);
  });
};

exports.findAll = (req, res) => {
  Projects.find({}, (err, projects) => {
    if (err) res.status(500).end();
    return res.json(projects);
  });
};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
