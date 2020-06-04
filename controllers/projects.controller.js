const Projects = require("../models/projects.model");

exports.create = (req, res) => {
  Projects.create(req.body, (err, newProject) => {
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

exports.findOne = (req, res) => {
  Projects.findById(req.params.id, (err, project) => {
    if (err) res.status(500).end();
    return res.json(project);
  });
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {
  return res.json({ warning: "Don't be a dick and delete my stuff" });
};
