import mongoose from 'mongoose';

const createModel = (model: mongoose.Model<mongoose.Document, {}>) => ({
  createOne: async (fields: any) => {
    try {
      const userDoc = await model.create(fields);
      const { _id, password, _v, ...rest } = userDoc.toObject();

      return rest;
    } catch (error) {
      console.error('error: ', error);
    }
  },
  findOne: async (field: any) => {
    const user = await model
      .findOne(field)
      .lean()
      .exec();

    return user;
  },
});

export default createModel;
