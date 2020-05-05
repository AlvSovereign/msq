import Artist from './Artist';
import User from './User';
import createModel from './createModel';

const models = {
  Artist: createModel(Artist),
  User: createModel(User),
};

export const schemas = { Artist, User };

export default models;
