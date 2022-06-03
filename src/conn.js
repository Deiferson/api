const Sequelize = require('sequelize');
const db = require('./config/config.json');

const User = require('./models/user');

const connect = new Sequelize(db);

module.exports = connect;