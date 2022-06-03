const Sequelize = require('sequelize');
const db = require('./config/config.json');

const User = require('./models/user');

const conn = new Sequelize(db);

module.exports = conn;