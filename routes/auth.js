const _ = require("lodash");
const Joi = require("joi");
const { User } = require("../models/User");
const mongoose = require("mongoose");
const express = require("express");
const { comparePasswords } = require("../utils/hashUtil");
const router = express.Router();

router.post("/validate", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checks whether user exists or not
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await comparePasswords(
    req.body.password,
    user.password
  );
  if (!validPassword) return res.status(400).send("Invalid email or password");

  res.send(true);
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return schema.validate(req);
}

module.exports = router;
