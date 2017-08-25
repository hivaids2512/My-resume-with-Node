"use strict";

var Section = require("./section.model");
var Resume = require("../resume/resume.model");
var mongoose = require("mongoose");

exports.getSectionList = function(req, res) {
  Section.find({ resume: req.params.resumeId })
    .then(sections => {
      res.json(sections);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

exports.createSection = function(req, res) {
  var newSection = new Section(req.body);
  newSection
    .save()
    .then(section => {
      Resume.findOneAndUpdate(
        { _id: req.params.resumeId },
        { $push: { sections: new mongoose.mongo.ObjectId(section._id) } },
        { new: true }
      )
        .then(resume => {
          res.json(section);
        })
        .catch(err => {});
    })
    .catch(err => {
      res.json(err);
    });
};

exports.getSectionById = function(req, res) {
  Section.findById(req.params.sectionId)
    .then(section => {
      res.json(section);
    })
    .catch(err => {
      res.json(err);
    });
};

exports.updateSection = function(req, res) {
  Section.findOneAndUpdate({ _id: req.params.sectionId }, req.body, {
    new: true
  })
    .then(section => {
      res.json(section);
    })
    .catch(err => {
      res.json(err);
    });
};

exports.removeSection = function(req, res) {
  Section.remove({
    _id: req.params.sectionId
  })
    .then(section => {
      res.json(section);
    })
    .catch(err => {
      res.json(err);
    });
};
