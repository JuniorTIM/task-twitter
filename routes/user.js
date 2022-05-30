const { Router } = require("express");

const { userController } = require("../controllers/users.controller");

const router = Router();

router.post("/users", userController.postUser)
router.delete("/users/:id", userController.deleteUser)
router.get("/users", userController.getUsers)
router.patch("/users/:id/twits", userController.savesTwit)

module.exports = router;