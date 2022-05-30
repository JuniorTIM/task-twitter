const User = require("../models/User.model");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({ name: req.body.name })
      .then(() => {
        res.json("Пользователь добавлен");
      })
      .catch(() => {
        res.json("Ошибка при создании пользователя");
      });
  },

  savesTwit: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      $push: { savesId: req.body.savesId },
    })
      .populate("Twit")
      .then(() => {
        res.json("Твит сохранен");
      })
      .catch(() => {
        res.json("Ошибка при сохранении твита");
      });
  },

  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Пользователь удален");
      })
      .catch(() => {
        res.json("Ошибка при удалении пользователя");
      });
  },

  getUsers: (req, res) => {
    User.find()
      .populate("savesId")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при получении пользователей");
      });
  },
};
