module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "password",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };