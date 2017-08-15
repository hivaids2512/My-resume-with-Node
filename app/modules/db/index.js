var dbConfig = require("../../config/db");

module.exports.getDbConnectionStr = function() {
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
