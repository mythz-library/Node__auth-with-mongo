const bcrypt = require("bcrypt");

const SALT_ROUNDS = 12;

const hashPassword = async (password) => {
  if (!password) throw new Error("Password is required for hashing");

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
};

module.exports = {
  hashPassword,
};
