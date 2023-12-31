const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

const npsUrl = `https://developer.nps.gov/api/v1/`; //3rd-party API from NPS
const apiKey = process.env.API_KEY; //api key stored in within heroku for live access as well as .env locally

module.exports = { sequelize, npsUrl, apiKey };
