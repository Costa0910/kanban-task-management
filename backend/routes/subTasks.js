const express = require("express");
const router = express.Router();

router.put("/:id", (_req, res) => {
  res.send("tasks put");
});

router.delete("/:id", (_req, res) => {
  res.send("tasks delete");
});

module.exports = router;
