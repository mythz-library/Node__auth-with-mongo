const _ = require("lodash");
const { User, validate } = require("../models/User");
const mongoose = require("mongoose");
const express = require("express");
const { hashPassword } = require("../utils/hashUtil");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checks whether user exists or not
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  user = new User(_.pick(req.body, ["name", "email", "password"]));

  user.password = await hashPassword(user.password);

  await user.save();

  res.send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
