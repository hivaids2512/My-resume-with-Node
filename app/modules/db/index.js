var dbConfig = require("../../config/db");

module.exports.getDbConnectionStr = function() {
  return (
    "mongodb://" +
    dbConfig.development.username +
    ":" +
    dbConfig.development.password +
    "@" +
    dbConfig.development.host +
    ":" + dbConfig.development.port +"/" + dbConfig.development.database
  );
};
