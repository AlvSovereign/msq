import User from './User';
import createModel from './createModel';

const models = {
  User: createModel(User),
};

export const schemas = { User };

export default models;
