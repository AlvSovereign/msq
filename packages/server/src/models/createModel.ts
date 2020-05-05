import mongoose from 'mongoose';

const createModel = (model: mongoose.Model<mongoose.Document, {}>) => ({
  createOne: async (fields: any) => {
    try {
      let doc: any = await model.create({ isRegistereed: true, ...fields });
      if (doc.owner) {
        doc = await doc.populate('owner').execPopulate();
      }
      const { _id, password, __v, ...rest } = doc.toObject();

      return { _id, ...rest };
    } catch (error) {
      console.error('error: ', error);
    }
  },
  findOne: async (field: any, password?: string) => {
    try {
      const { _id, password: _, __v, ...rest }: any = await model
        .findOne(field)
        .populate('owner')
        .lean()
        .exec();

      return { _id, ...rest };
    } catch (error) {
      console.error('error: ', error);
    }
  },
});

export default createModel;
