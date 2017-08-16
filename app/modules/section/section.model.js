"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ResumeModel = require("../resume/resume.model")

var SectionSchema = new Schema({
    title: {
        type: String,
        Required: "Section name is required"
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
    resume: { type: Schema.ObjectId, ref: ResumeModel.schema }
});

module.exports = mongoose.model("Section", SectionSchema);
