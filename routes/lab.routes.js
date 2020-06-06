module.exports = (app) => {
  const lab = require("../controllers/lab.controller.js");
  app.get("/lab", lab.findAll);
};
