require('dotenv').config();

module.exports ={
  "development": {
    "username": "ograyfbl",
    "password": process.env.DB_PASSWORD,
    "database": "ograyfbl",
    "host": "suleiman.db.elephantsql.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
