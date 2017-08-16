"use strict";
module.exports = function (router) {
    var sectionController = require("./section.controller");
    router
        .route("/resumes/:resumeId/sections")
        .get(sectionController.getSectionList)
        .post(sectionController.createSection);

    router
        .route("/resumes/:resumeId/sections/:sectionId")
        .get(sectionController.getSectionById)
        .put(sectionController.updateSection)
        .delete(sectionController.removeSection);
};
