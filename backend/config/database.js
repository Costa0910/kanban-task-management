const config = require("./index");

module.exports = {
  development: {
    storage: config.dbPath,
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueries: true,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    username: "root",
    password: null,
    dialect: "postgres",
    seederStorage: "sequelize",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
