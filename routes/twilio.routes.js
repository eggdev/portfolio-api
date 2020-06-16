module.exports = (app) => {
  const twilio = require("../controllers/twilio.controller.js");
  app.post("/twilio", twilio.send);
};
