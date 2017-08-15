var express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require("body-parser"),
  mongoose = require('mongoose'),
  winston = require('winston'),
  glob = require('glob'),
  cors = require('cors');

var db = require("./app/modules/db")

mongoose.Promise = global.Promise;

//Allow Cross Domain Request
app.use(cors())

//Using Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = glob.sync(__dirname + '/app/modules/*/*.route.js')
routes.forEach(function (route) {
  var router = express.Router();
  var moduleRoutes = require(route);
  moduleRoutes(router);
  app.use('/api', router);
})

mongoose.connect(db.getDbConnectionStr(), {useMongoClient: true}).then(
  () => {
    app.listen(port);
    winston.log('info', "Server started on: " + port);
  },
  err => {
    console.log(err)
  }
);
