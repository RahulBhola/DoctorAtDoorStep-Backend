// created this file to create a token for auth file step4

const jwt = require("jsonwebtoken");
exports = {};

exports.getToken = async (email, user) => {
  // Assume this code is complete
  const token = jwt.sign({ identifier: user._id }, "iamrahulbhola");
  return token;
};

module.exports = exports;
