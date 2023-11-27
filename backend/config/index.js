module.exports = {
  dbPath: process.env.DB_PATH || "database.db",
  // dbHost: process.env.DB_HOST || "localhost",
  port: process.env.SERVER_PORT || 5432,
  // dbUser: process.env.DB_USER || "postgres",
  // dbPassword: process.env.DB_PASSWORD || "postgres",
  environment: process.env.NODE_ENV || "development",
  jwtConfig: {
    secret: process.env.JWT_SECRET || "secret",
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  },
};
