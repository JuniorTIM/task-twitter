const mongoose = require("mongoose");

const commentSchema = {
  userId: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  twitId: {
    ref: "Twit",
    type: mongoose.SchemaTypes.ObjectId,
  },
};

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
