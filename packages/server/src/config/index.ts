import devConfig from './dev';

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 3000,
  secret: {},
  dbUrl: '',
};

let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = devConfig;
    break;
  // case 'test':
  // case 'testing':
  //   envConfig = require('./testing').config;
  //   break;
  default:
    envConfig = devConfig;
}

const config = {
  ...baseConfig,
  ...envConfig,
};

export default config;
