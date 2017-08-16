"use strict";

var Section = require("./section.model")
var mongoose = require('mongoose');

exports.getSectionList = function (req, res) {
    Section.find({ "resume": req.params.resumeId })
        .then(sections => {
            res.json(sections);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

exports.createSection = function (req, res) {
    var newSection = new Section(req.body);
    newSection
        .save()
        .then(section => {
            res.json(section);
        })
        .catch(err => {
            res.json(err);
        });
};

exports.getSectionById = function (req, res) {
    Section.findById(req.params.sectionId)
        .then(section => {
            res.json(section);
        })
        .catch(err => {
            res.json(err);
        });
};

exports.updateSection = function (req, res) {
    Section.findOneAndUpdate({ _id: req.params.sectionId }, req.body, { new: true })
        .then(section => {
            res.json(section);
        })
        .catch(err => {
            res.json(err);
        });
};

exports.removeSection = function (req, res) {
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
