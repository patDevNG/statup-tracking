/* eslint-disable no-unused-vars */
const createError = require('http-errors');
const { sendErrorRequest } = require('../utils/general/response');

function init(app) {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res, next) => {
    // render the error page
    res.status(err.status || 500);
    if (!err.status || err.status === 500) {
      sendErrorRequest(res, { message: err.message, error: err });
    } else sendErrorRequest(res, { message: err.message, error: err }, 404);
  });
}

module.exports = {
  init,
};
