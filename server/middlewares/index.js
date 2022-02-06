
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
function init(app, express) {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(cors())
  app.use(express.urlencoded({ extended: true }));

  //helps you secure your Express apps by setting various HTTP headers
  // app.use(
  //   helmet({
  //     frameguard: {
  //       action: 'deny',
  //     },
  //   }),
  // );
  app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
}
module.exports = {
  init
};
