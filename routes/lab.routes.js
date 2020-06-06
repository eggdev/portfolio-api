module.exports = (app) => {
  const { findAll } = require("../controllers/lab.controller.js");
  app.get("/lab", findAll);
};
