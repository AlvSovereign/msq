import mongoose from 'mongoose';
import config from './config';

const connect = (url = config.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};

export default connect;
