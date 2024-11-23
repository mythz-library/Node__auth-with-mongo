const bcrypt = require("bcrypt");

const SALT_ROUNDS = 12;

const hashPassword = async (password) => {
  if (!password) throw new Error("Password is required for hashing");

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
};

const comparePasswords = async (password, hashedPassword) => {
  if (!password || !hashedPassword) {
    throw new Error(
      "Both password and hashed password are required for comparison."
    );
  }
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePasswords,
};
