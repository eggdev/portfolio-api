module.exports = (app) => {
  const jobs = require("../controllers/jobs.controller.js");

  app.post("/jobs", jobs.create);

  app.get("/jobs", jobs.findAll);

  // app.get("/jobs/:id", jobs.findOne);

  // app.put("/jobs/:id", jobs.update);

  // app.delete("/jobs/:id", jobs.delete);
};
