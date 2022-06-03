const Sequelize = require('sequelize');
const db = require('./config/config.json');

const User = require('./models/User');


const connect = new Sequelize(db);
User.init(connect);

module.exports = connect;