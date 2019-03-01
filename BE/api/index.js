const APP = require("express")();

var bodyParser = require("body-parser");

const ENV = process.env;
const PORT = ENV.PORT || 80;
const commons = require("./common");
const logger = commons.logger;


APP.use(bodyParser.json());


APP.get("/status", function (req, res) {
  logger.debug("Looks like server is running ok");
  res.status(200).send("Looks like everything on API server is working");
});

APP.listen(PORT, () => logger.debug(`API server listening on port ${PORT}!`));
