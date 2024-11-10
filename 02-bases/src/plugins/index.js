const { getAge } = require("./get-age-plugin");
const { getUUID } = require("./get-id-plugin");
const { http } = require("./http-client");
const buildLogger = require("./logger-plugins");

module.exports = {
  getAge,
  getUUID,
  http,
  buildLogger,
};
