"use strict";
var passport = require("passport");
module.exports = function(router) {
  var resumeController = require("./resume.controller");
  router
    .route("/resumes")
    .get(
      passport.authenticate("jwt", { session: false }),
      resumeController.getResumeList
    )
    .post(
      passport.authenticate("jwt", { session: false }),
      resumeController.createResume
    );

  router
    .route("/resumes/:resumeId")
    .get(
      passport.authenticate("jwt", { session: false }),
      resumeController.getResumeById
    )
    .put(
      passport.authenticate("jwt", { session: false }),
      resumeController.updateResume
    )
    .delete(
      passport.authenticate("jwt", { session: false }),
      resumeController.removeResume
    );

  router
    .route("/resumes/public/:resumeId")
    .get(
      passport.authenticate("jwt", { session: false }),
      resumeController.getPublicResume
    )
    .put(
      passport.authenticate("jwt", { session: false }),
      resumeController.publicResume
    );
};
