switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = require('./config/webpack.dev.js');
    break;
  case 'production':
    module.exports = require('./config/webpack.prod.js');
    break;
  default:
    module.exports = require('./config/webpack.dev.js');
}
