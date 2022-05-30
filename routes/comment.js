const { Router } = require("express");

const { commentController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentController.postComment);
router.delete("/comments/:id", commentController.deleteComment);
router.get("/comments", commentController.getAll);
router.get("/comments/:id", commentController.getTwitCom);

module.exports = router;
