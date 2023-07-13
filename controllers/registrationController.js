// import schema
const Registration = require("../models/registrationModel");
// import mongoose
const mongoose = require("mongoose");

// get all registration
const getRegistrations = async (req, res) => {
  const registration = await Registration.find({}).sort({ createdAt: -1 });
  res.status(200).json(registration);
};

// get a single registration
const getRegistration = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw Error("No such user");
    }

    const registration = await Registration.findById(id);

    if (!registration) {
      throw Error("No such user");
    }

    res.status(200).json(registration);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// create new registration document
const createRegistration = async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    status,
    categories,
    birthDay,
    birthLocation,
  } = req.body;

  try {
    const registration = await Registration.create({
      firstName,
      middleName,
      lastName,
      categories,
      status,
      birthDay,
      birthLocation,
    });
    res.status(200).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete registration document
const deleteRegistration = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw Error("No such user");
    }

    const registration = await Registration.findOneAndDelete({ _id: id });

    if (!registration) {
      throw Error("No such user");
    }

    res.status(200).json(registration);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// update  registration document
const updateRegistration = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw Error("No such user");
    }

    const registration = await Registration.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );

    if (!registration) {
      throw Error("No such user");
    }

    res.status(200).json(registration);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  getRegistrations,
  getRegistration,
  createRegistration,
  deleteRegistration,
  updateRegistration,
};
