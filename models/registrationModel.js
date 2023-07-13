// import mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create database structure
const registrationSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    birthDay: {
      type: Number,
      required: true,
    },

    birthLocation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create model and export it
module.exports = mongoose.model("Registration", registrationSchema);
