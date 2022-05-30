const mongoose = require("mongoose");

const userSchema = {
  name: String,
  savesId: [{
    ref: "Twit",
    type: mongoose.SchemaTypes.ObjectId,
  }],
};

const User = mongoose.model("User", userSchema);

module.exports = User;
