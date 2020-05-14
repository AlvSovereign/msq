import mongoose from 'mongoose';
import Artist from './Artist';

const createModel = (model: mongoose.Model<mongoose.Document, {}>) => ({
  createMany: async (fields: any[]) => {
    try {
      let docs: any = await model.insertMany(fields);

      // if (docs.producedBy) {
      //   docs = await docs.populate('producedBy').execPopulate();
      //   console.log('docs: ', docs);
      // }
      // if (docs.performedBy) {
      //   docs = await docs.populate('performedBy').execPopulate();
      //   console.log('docs: ', docs);
      // }
      return docs;
    } catch (error) {
      console.error('error: ', error);
    }
  },
  createOne: async (fields: any) => {
    console.log('fields: ', fields);
    try {
      let doc: any = await model.create({ ...fields });

      doc = await doc
        .populate('owner')
        .populate('producedBy')
        .populate('tracks')
        .execPopulate();

      const { _id, password = null, __v, ...rest } = doc.toObject();

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
        .populate('artist')
        .lean()
        .exec();

      return { _id, ...rest };
    } catch (error) {
      console.error('error: ', error);
    }
  },
  findById: async (id: string) => {
    try {
      const doc: any = model
        .findById(id)
        .populate({
          path: 'artist',
          model: 'Artist',
          populate: {
            path: 'releases',
            model: 'Release',
          },
        })
        .populate('owner')
        .lean()
        .exec();

      return doc;
    } catch (error) {
      console.error('error: ', error);
    }
  },
  findByIdAndUpdate: async (id: string, fields: any) => {
    try {
      let doc: any = await model
        .findByIdAndUpdate(id, fields)
        .populate('artist')
        .populate({ path: 'releases', model: 'Release' })
        .lean()
        .exec();

      return doc;
    } catch (error) {
      console.error('error: ', error);
    }
  },
});

export default createModel;
