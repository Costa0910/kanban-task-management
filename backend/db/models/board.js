"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Board.hasMany(models.Task, {
        foreignKey: "boardId",
        as: "Tasks",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Board.belongsTo(models.User, {
        foreignKey: "userId",
        as: "Users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Board.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      statusColumn: {
        // type: Sequelize.ARRAY(Sequelize.STRING),
        // save as string instead of array
        //change to array later in posgresql db
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Board",
    }
  );
  return Board;
};
