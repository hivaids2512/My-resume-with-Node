var dbConfig = require("./db");
var domain = require("./domain");

exports.getDbConnectionStr = function() {
  var env = process.env.NODE_ENV || "development"
  return (
    "mongodb://" +
    dbConfig[env].username +
    ":" +
    dbConfig[env].password +
    "@" +
    dbConfig[env].host +
    ":" +
    dbConfig[env].port +
    "/" +
    dbConfig[env].database
  );
};

exports.getEndPoint = function() {
  var env = process.env.NODE_ENV || "development"
  return (
    domain[env]
  );
};