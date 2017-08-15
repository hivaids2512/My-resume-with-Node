"use strict";
module.exports = function(router) {
  var resumeController = require("./resume.controller");
  router
    .route("/resumes")
    .get(resumeController.getResumeList)
    .post(resumeController.createResume);

  router
    .route("/resumes/:resumeId")
    .get(resumeController.getResumeById)
    .put(resumeController.updateResume)
    .delete(resumeController.removeResume);
};
