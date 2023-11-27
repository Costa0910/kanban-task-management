"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Board, {
        foreignKey: "boardId",
        as: "Boards",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Task.hasMany(models.SubTask, {
        foreignKey: "taskId",
        as: "SubTasks",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Task.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // title is required
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      boardId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Boards",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
