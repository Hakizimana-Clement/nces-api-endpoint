//////////////////////////////////////////
/////////// Import packages /////////////
/////////////////////////////////////////
// import dotenv
require("dotenv").config();

// import express
const express = require("express");
const app = express();

// import router
const registrationRouter = require("./routes/registration");

// import mongoose
const mongoose = require("mongoose");

// environment variables
const port = process.env.PORT;
const db_url = process.env.MONGO_DB_URL;

//////////////////////////////////////////
/////////// Middleware /////////////
/////////////////////////////////////////
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

//////////////////////////////////////////
/////////// Routers /////////////
/////////////////////////////////////////

// Home (welcome message) routes
app.get("/", (req, res) => {
  res.json({ message: "WELCOME TO NCES SYSTEM ⛪" });
});

// registration api endpoint
app.use("/api/registrations", registrationRouter);

//////////////////////////////////////////
/////////// Connection /////////////
/////////////////////////////////////////
mongoose
  .connect(db_url)
  .then(() => {
    app.listen(port, () => {
      console.log(`successfully connected to nces system database`);
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
