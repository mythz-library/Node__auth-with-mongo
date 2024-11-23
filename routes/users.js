const { User, validate } = require("../models/User");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checks whethe user exists or not
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();

  res.send(user);
});

module.exports = router;