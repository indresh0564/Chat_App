const Express = require('express');
const signup_controller = require('../controller/signup');
const routes = Express.Router();

routes.get("/User", signup_controller.User);

module.exports = routes;