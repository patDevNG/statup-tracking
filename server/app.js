const express = require('express');

const middleware = require('./middlewares');
const errorHandler = require('./middlewares/errorHandler');
const apolloGql = require('./middlewares/appollo-graphql');

const app = express();
middleware.init(app, express);
apolloGql(app);
errorHandler.init(app);

module.exports = app;
