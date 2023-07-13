// import express and router
const express = require("express");
const router = express.Router();
// import controller
const {
  getRegistration,
  getRegistrations,
  createRegistration,

  deleteRegistration,
  updateRegistration,
} = require("../controllers/registrationController");
router
  // Get all registration document
  .get("/", getRegistrations)
  // Get a single registration document
  .get("/:id", getRegistration)
  // Create a new registration document
  .post("/", createRegistration)
  // delete a registration document
  .delete("/:id", deleteRegistration)
  // update a registration document
  .patch("/:id", updateRegistration);

// export router
module.exports = router;
