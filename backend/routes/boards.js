const express = require("express");
const router = express.Router();

router.put("/:id", (_req, res) => {
  res.send("userBoards put");
});

router.delete("/:id", (_req, res) => {
  res.send("userBoards delete");
});

router.get("/", (_req, res) => {
  res.send("userBoards");
});

router.post("/", (_req, res) => {
  res.send("userBoards post");
});

module.exports = router;
