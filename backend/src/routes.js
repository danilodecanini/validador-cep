var AsyncRouter = require('express-async-router').AsyncRouter;

const routes = AsyncRouter({ send: false });

const ValidationCEP = require('./app/controllers/ValidationCEPController');

// CEP
routes.get('/', ValidationCEP.index);

module.exports = routes;
