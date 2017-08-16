"use strict";
var passport = require("passport");
module.exports = function(router) {
  var sectionController = require("./section.controller");
  router
    .route("/resumes/:resumeId/sections")
    .get(
      passport.authenticate("jwt", { session: false }),
      sectionController.getSectionList
    )
    .post(
      passport.authenticate("jwt", { session: false }),
      sectionController.createSection
    );

  router
    .route("/resumes/:resumeId/sections/:sectionId")
    .get(
      passport.authenticate("jwt", { session: false }),
      sectionController.getSectionById
    )
    .put(
      passport.authenticate("jwt", { session: false }),
      sectionController.updateSection
    )
    .delete(
      passport.authenticate("jwt", { session: false }),
      sectionController.removeSection
    );
};
