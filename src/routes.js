const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

module.exports = routes;