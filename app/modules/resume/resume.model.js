"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ResumeSchema = new Schema({
  name: {
    type: String,
    Required: "Resume name is required"
  },
  description: {
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
  status: {
    type: String,
    default: "PRIVATE"
  }
});

module.exports = mongoose.model("Resume", ResumeSchema);
