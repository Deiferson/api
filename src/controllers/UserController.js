const User = require('../models/user');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async store(req, res) {

  },
  async delete(req, res) {

  },
  async show(req, res) {

  }
};