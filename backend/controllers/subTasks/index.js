const { SubTask } = require("../../db/models");

const addSubTask = async (taskId, SubTasks) => {
  const newlyCreated = await SubTask.bulkCreate(
    SubTasks.map((SubTask) => ({
      ...SubTask,
      taskId,
    }))
  );

  if (newlyCreated.length === 0) return null;
  return await SubTask.findAll({
    where: {
      taskId,
    },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
};

const updateSubTask = async (taskId, SubTasks) => {
  if (SubTasks.length === 0) return null;

  // handle update and create new subtasks separately
  const toUpdate = SubTasks.filter((sub) => sub.id);
  const toCreate = SubTasks.filter((sub) => !sub.id);

  // update existing subtasks with new data
  if (toUpdate.length) {
    for (const newSubTask of toUpdate) {
      await SubTask.update(newSubTask, {
        where: {
          id: newSubTask.id,
        },
      });
    }
  }

  // create new subtasks
  if (toCreate.length) {
    for (const newSubTask of toCreate) {
      await SubTask.create({
        ...newSubTask,
        taskId, // all subtasks have same taskId
      });
    }
  }

  return await SubTask.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: {
      taskId, // all subtasks have same taskId
    },
  });
};

module.exports = {
  addSubTask,
  updateSubTask,
};
