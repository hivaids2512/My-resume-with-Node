"use strict";

var mongoose = require("mongoose"),
  Resume = require("./resume.model");

exports.getResumeList = function(req, res) {
  Resume.find({})
    .then(resumes => {
      res.json(resumes);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

exports.createResume = function(req, res) {
  var newReumse = new Resume(req.body);
  newReumse
    .save()
    .then(resume => {
      res.json(resume);
    })
    .catch(err => {
      res.json(err);
    });
};

exports.getResumeById = function(req, res) {
  Resume.findById(req.params.resumeId)
    .then(resume => {
      res.json(resume);
    })
    .catch(err => {
      res.json(err);
    });
};

exports.updateResume = function(req, res) {
  Resume.findOneAndUpdate({ _id: req.params.resumeId }, req.body, { new: true })
    .then(resume => {
      res.json(resume);
    })
    .catch(err => {
      res.json(err);
    });
};

exports.publicResume = function(req, res) {
  Resume.findOneAndUpdate(
    { _id: req.params.resumeId },
    { $set: { status: "PUBLIC" } },
    { new: true }
  )
    .then(resume => {
      res.json(resume);
    })
    .catch(err => {
      res.json(err);
    });
};

exports.getPublicResume = function(req, res) {
  Resume.findOne({ _id: req.params.resumeId, status: "PUBLIC" })
    .populate('sections')
    .exec()
    .then(resume => {
      if (resume) {
        res.json(resume);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch(err => {
      res.json(err);
    });
};

exports.removeResume = function(req, res) {
  Resume.remove({
    _id: req.params.resumeId
  })
    .then(resume => {
      res.json(resume);
    })
    .catch(err => {
      res.json(err);
    });
};
