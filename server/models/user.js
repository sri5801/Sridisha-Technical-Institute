const mongoose = require("mongoose");
// Define Schema
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userFeedback: { type: [String], required: false },
});

module.exports = mongoose.model("User", userSchema);
