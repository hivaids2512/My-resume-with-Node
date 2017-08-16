"use strict";
module.exports = function(router) {
  var authController = require("./auth.controller");
  router
    .route("/signin")
    .post(authController.signIn);

    router
    .route("/signup")
    .post(authController.signUp);
};
