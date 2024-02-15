const signUpRouter = require("express").Router();
const UserModel = require("../models/Users");
const bcrypt = require("bcryptjs");
const validator = require("validator");

signUpRouter.post("/Add", async (req, res) => {
  const data = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password, 
    dob: req.body.dob,
  });

  const user = await UserModel.findOne({ username: data.username });

  if(user){
    return res.status(400).json({error: "username already exists"})
  }

  const usernameRegex = /^(?=.{8,20}$)[a-zA-Z0-9]+$/;

  if (!usernameRegex.test(data.username)) {
    return res.status(400).json({ error: "Invalid username format" });
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(.{8,20})$/;
  if (!passwordRegex.test(data.password)) {
    return res.status(400).json({ error: "Invalid password format" });
  }

  if (!validator.isEmail(data.email)) {
    return res.status(400).json({ error: "Invalid Email " });
  } //=> true

  if (!validateDateOfBirth(data.dob)) {
    return res.status(400).json({ error: "Invalid DOB " });
  }

  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(data.password, salt, async (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        // Handle error gracefully (e.g., log, inform user)
        return;
      }

      data.password = hash;
      console.log("Hashed password:", hash);
      // Store the hash in your database securely
      try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log(data);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
  });
});

function validateDateOfBirth(dateOfBirth) {
  // Get today's date
  const today = new Date();
  console.log(today);
  // Convert date of birth to Date object
  const dob = new Date(dateOfBirth);
  console.log(dob);
  // Calculate minimum allowed date by subtracting 5 years from today
  const minAllowedDob = new Date(
    today.getFullYear() - 5,
    today.getMonth(),
    today.getDate()
  );

  // Check if date of birth is greater than or equal to the minimum allowed date
  return (dob<=minAllowedDob);
}

module.exports = signUpRouter;
