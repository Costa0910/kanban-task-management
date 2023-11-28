const express = require("express");
const router = express.Router();

router.put("/:id", (_req, res) => {
  res.send("tasks put");
});

router.delete("/:id", (_req, res) => {
  res.send("tasks delete");
});

router.get("/", (_req, res) => {
  res.send("tasks");
});

router.post("/", (_req, res) => {
  res.send("tasks post");
});

module.exports = router;
