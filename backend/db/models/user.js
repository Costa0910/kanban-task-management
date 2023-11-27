"use strict";
const { Model, Op } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static async createUser({ username, email, password }) {
      // Create a new user if it does not exist
      const user = await User.findOne({
        where: {
          [Op.or]: [{ username }, { email }],
        },
      });

      if (user) {
        return false;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashed Password: ", hashedPassword);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      return newUser.scope("currentUser").findByPk(newUser.id);
    }

    static async login({ credential, password }) {
      const user = await User.scope("loginUser").findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential,
          },
        },
      });

      if (user && (await bcrypt.compare(password, user.password))) {
        return await user.scope("currentUser").findByPk(user.id);
      }
    }
    static associate(models) {
      // define association here
      User.hasMany(models.Board, {
        foreignKey: "userId",
        as: "Boards",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 3,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 6,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        loginUser: {
          attributes: {},
        },
        currentUser: {
          attributes: {
            exclude: ["password"],
          },
        },
      },
    }
  );
  return User;
};
