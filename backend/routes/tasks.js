const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks/index");

/**
 * PUT /api/tasks/:id
 * {
 *   title: "",
 *   description: "",
 *   status: "",
 * }
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const updatedTask = await updateTask(id, { title, description, status });

  if (updatedTask) {
    return res.status(200).json({
      task: updatedTask,
      message: "success",
    });
  }

  res.status(400).json({
    task: null,
    message: "Task not updated",
  });
});

/**
 * DELETE /api/tasks/:id
 * response:
 * {
 *   task: {
 *     id: ""},
 }
 *   message: "success"
 * }
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedTask = await deleteTask(id);

  if (deletedTask) {
    return res.status(200).json({
      task: { id: deletedTask },
      message: "success",
    });
  }

  res.status(400).json({
    task: null,
    message: "Task not deleted",
  });
});

/**
 * POST /api/tasks/:id
 * {
 *   title: "",
 *   description: "",
 *   status: "",
 *   boardId: "",
 * }
 */
router.post("/", async (req, res) => {
  const { title, description, status, boardId } = req.body;
  const task = await addTask({ title, description, status, boardId });

  if (task) {
    return res.status(200).json({
      task: task,
      message: "success",
    });
  }

  res.status(400).json({
    task: null,
    message: "Task not created",
  });
});

/**
 * GET /api/tasks
 * response:
 * {
 *   tasks: []
 *   message: "success" | "error",
 *   numberOfTasks: 0
 * }
 }
 */
router.get("/", async (req, res) => {
  const { boardId } = req.body;
  const tasks = await getTasks(boardId);
  if (tasks) {
    return res.status(200).json({
      tasks: tasks,
      message: "success",
      numberOfTasks: tasks.length,
    });
  }

  res.status(404).json({
    tasks: [],
    message: "Tasks not found",
    numberOfTasks: 0,
  });
});

module.exports = router;
