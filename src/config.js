const dotenv = require('dotenv');

dotenv.config();

const env = {
  'HOST': process.env.HOST || 'hostname',
  'PORT': process.env.PORT || 3000,
  'VERSION': process.env.VERSION || '1.0.0',
}

module.exports = env;
