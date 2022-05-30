const Twit = require("../models/Twit.model");

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
      userId: req.body.userId,
      text: req.body.text,
    })
      .then(() => {
        res.json("Пост добавлен");
      })
      .catch(() => {
        res.json("Ошибка при добавлении поста");
      });
  },

  deleteTwit: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Пост удален");
      })
      .catch(() => {
        res.json("Ошибка при удалении поста");
      });
  },

  getTwits: (req, res) => {
    Twit.find()
      .populate("userId")
      
      .populate("likesId")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при получении постов");
      });
  },

  likeTwit: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      $push: { likesId: req.body.likesId },
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка лайка");
      });
  },
};
