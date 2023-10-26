require('dotenv').config();
module.exports = {
  "development": {
    "username": "ograyfbl",
    "password": process.env.PW,
    "database": "ograyfbl",
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "ograyfbl",
    "password": process.env.PW,
    "database": "database_test",
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": "ograyfbl",
    "password": process.env.PW,
    "database": "ograyfbl",
    "host": process.env.HOST,
    "dialect": "postgres"
  }
}
