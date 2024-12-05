const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // UID único de Firebase
  name: String,
  email: String,
  city: String,
});

module.exports = mongoose.model("User", userSchema);