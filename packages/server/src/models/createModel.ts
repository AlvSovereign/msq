import mongoose from 'mongoose';

const createModel = (model: mongoose.Model<mongoose.Document, {}>) => ({
  createOne: async (fields: any) => {
    try {
      const userDoc = await model.create(fields);

      return userDoc;
    } catch (error) {
      console.error('error: ', error);
    }
  },
  findOne: async () => {},
});

export default createModel;
