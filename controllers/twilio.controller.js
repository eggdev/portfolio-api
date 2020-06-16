const { text } = require("body-parser");

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const accountSid = ACCOUNT_SID;
const authToken = AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.send = (req, res) => {
  const getTextContent = () => {
    const { type, idea } = req.body;
    return `${type}: ${idea}`;
  };
  const textMessage = getTextContent();

  if (req.body) {
    client.messages
      .create({
        body: textMessage,
        from: "+12286419593",
        to: "+19149073990",
      })
      .then(() => {
        return res.json({ ...req.body, success: true });
      })
      .done();
  }
};
