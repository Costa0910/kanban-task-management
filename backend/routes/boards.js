const express = require("express");
const router = express.Router();
const { requireAuth } = require("../controllers/auth/auth");
const {
  getBoards,
  updateBoard,
  addBoard,
  deleteBoard,
} = require("../controllers/boards/index");

router.use(requireAuth);

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, statusColumn } = req.body;
  try {
    const updatedBoard = await updateBoard({ id, title, statusColumn });
    res.status(200).json({
      board: updatedBoard,
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBoardId = await deleteBoard(id);
    res.status(200).json({
      boardId: deletedBoardId,
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const { title, statusColumn, userId } = req.body;
  try {
    const newBoard = await addBoard({ title, statusColumn, userId });
    res.status(201).json({
      board: newBoard,
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/", async (_req, res) => {
  const boards = await getBoards(); // return null if no boards
  if (!boards) {
    res.status(404).json({
      boards: [],
      message: "Boards not found",
      numberOfBoards: 0,
    });
  }

  res.status(200).json({
    boards: boards,
    message: "success",
    numberOfBoards: boards.length,
  });
});

module.exports = router;
