import mongoose from 'mongoose';
import { AuthenticationError } from 'apollo-server';
import { IUser } from '../typeDefs';

const createModel = (model: mongoose.Model<mongoose.Document, {}>) => ({
  createOne: async (fields: any) => {
    try {
      const userDoc = await model.create({ isRegistereed: true, ...fields });
      const { _id, password, __v, ...rest } = userDoc.toObject();

      return rest;
    } catch (error) {
      console.error('error: ', error);
    }
  },
  findOne: async (field: any, password?: string) => {
    try {
      const { _id, password: _, __v, ...rest }: any = await model
        .findOne(field)
        .lean()
        .exec();

      return rest;
    } catch (error) {
      console.error('error: ', error);
    }
  },
});

export default createModel;
