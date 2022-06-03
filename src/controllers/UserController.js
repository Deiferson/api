const User = require('../models/user');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
};