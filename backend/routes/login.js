const Express = require('express');
const login_controller = require('../controller/login');
const routes = Express.Router();

routes.post("/login" , login_controller.User);

module.exports = routes;