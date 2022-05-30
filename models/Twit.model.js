const mongoose = require("mongoose");

const twitSchema = mongoose.Schema({
  userId: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  likesId: [
    {
      ref: "User",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});

const Twit = mongoose.model("Twit", twitSchema);

module.exports = Twit;
