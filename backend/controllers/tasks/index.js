const { Task, SubTask } = require("../../db/models");
const { addSubTask, updateSubTask } = require("../subTasks/index");

const { Op } = require("sequelize");

const getTasks = async (id) => {
  try {
    const tasks = await Task.findAll({
      where: {
        boardId: id,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: SubTask,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          as: "SubTasks",
        },
      ],
    });

    if (tasks.length === 0) return null;
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

const addTask = async (task, SubTasks) => {
  try {
    const newTask = await Task.create(task);
    let addedSubTasks = null;
    if (SubTasks.length) {
      addedSubTasks = await addSubTask(newTask.id, SubTasks);
    }

    return {
      ...newTask.dataValues,
      SubTasks: addedSubTasks || [],
    };
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (id, task, SubTasks) => {
  try {
    const updatedTask = await Task.update(task, {
      where: {
        id,
      },
    });
    let updatedSubTasks = null;
    if (SubTasks.length) {
      updatedSubTasks = await updateSubTask(id, SubTasks);
    }
    // returned type object
    if (Array.from(updatedTask).includes(0)) return null;
    return {
      id,
      ...task,
      SubTasks: updatedSubTasks || [],
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (id, SubTasks) => {
  // Handle delete Task and SubTasks
  if (SubTasks.length) {
    console.log("Deleting SubTasks", SubTasks);
    return await SubTask.destroy({
      where: {
        id: {
          [Op.in]: SubTasks,
        },
      },
    });
  }
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
