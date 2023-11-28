const express = require("express");
const router = express.Router();

const boardsRouter = require("./boards");
const tasksRouter = require("./tasks");
const subTasksRouter = require("./subTasks");
const userRouter = require("./user");

router.use("/boards", boardsRouter);
router.use("/tasks", tasksRouter);
router.use("/subTasks", subTasksRouter);
router.use("/user", userRouter);

// router.get("/", (_req, res) => {
//   res.send("index");
// });

// router.use("*", (_req, res) => {
//   res.status(404).send("Not found");
// });

module.exports = router;
