import Artist from './Artist';
import Release from './Release';
import User from './User';
import createModel from './createModel';

const models = {
  Artist: createModel(Artist),
  Release: createModel(Release),
  User: createModel(User),
};

export const schemas = { Artist, Release, User };

export default models;
