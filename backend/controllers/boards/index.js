const { Board, Task } = require("../../db/models");

const getBoards = async () => {
  const boards = await Board.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] }, // exclude createdAt and updatedAt from the response
  });
  if (boards.length === 0) return null;

  const getFirstTasks = await Task.findAll({
    where: {
      boardId: boards[0].id,
    },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });

  boards[0].dataValues.tasks = getFirstTasks;
  return boards;
};

const addBoard = async ({ title, userId, statusColumn }) => {
  const newBoard = await Board.create({
    title,
    userId,
    statusColumn,
  });

  return newBoard.dataValues;
};

const updateBoard = async ({ id, title, statusColumn }) => {
  const board = await Board.findByPk(id);
  board.title = title;
  board.statusColumn = statusColumn;
  await board.save();
  return board;
};

const deleteBoard = async (id) => {
  await Board.destroy({
    where: {
      id,
    },
  });

  return id;
};

module.exports = {
  getBoards,
  addBoard,
  deleteBoard,
  updateBoard,
};
