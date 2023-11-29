const { Task } = require("../../db/models");

const getTasks = async (id) => {
  try {
    const tasks = await Task.findAll({
      where: {
        boardId: id,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (tasks.length === 0) return null;
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

const addTask = async (task) => {
  try {
    const newTask = await Task.create(task);
    return newTask;
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (id, task) => {
  try {
    const updatedTask = await Task.update(task, {
      where: {
        id,
      },
    });
    // returned type object
    if (Array.from(updatedTask).includes(0)) return null;
    return {
      id,
      ...task,
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (id) => {
  try {
    const deletedTask = await Task.destroy({
      where: {
        id,
      },
    });
    if (deletedTask === 0) return null;
    return id;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
