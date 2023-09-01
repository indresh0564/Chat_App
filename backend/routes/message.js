const Express = require('express');
const message_controller = require('../controller/message');
const authentica = require('../authentication/user');

const routes = Express.Router();

routes.post('/message', authentica.authenticate, message_controller.userMessage);

module.exports = routes;