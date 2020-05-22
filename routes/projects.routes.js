module.exports = (app) => {
  const projects = require("../controllers/projects.controller.js");

  app.post("/projects", projects.create);

  app.get("/projects", projects.findAll);

  app.get("/projects/:id", projects.findOne);

  app.put("/projects/:id", projects.update);

  app.delete("/projects", projects.delete);
};
