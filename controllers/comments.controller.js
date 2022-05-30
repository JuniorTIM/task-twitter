const Comment = require("../models/Comment.model");

module.exports.commentController = {
  postComment: (req, res) => {
    Comment.create({
      userId: req.body.userId,
      text: req.body.text,
      twitId: req.body.twitId,
    })
      .then(() => {
        res.json("Комментарий добавлен");
      })
      .catch(() => {
        res.json("Ошибка при добавлении комментария");
      });
  },

  deleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Комментарий удален");
      })
      .catch(() => {
        res.json("Ошибка при удалении комментария");
      });
  },

  getAll: (req, res) => {
    Comment.find()
      .populate("userId")
      .populate("twitId")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getTwitCom: (req, res) => {
    Comment.findById({ twitId: req.params.id })
      .populate("userId")
      .populate("twitId")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
