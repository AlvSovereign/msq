import mongoose, { Schema } from 'mongoose';
import { nanoid } from 'nanoid';

const ReleaseSchema: Schema = new Schema(
  {
    id: {
      type: String,
      default: () => nanoid(),
    },
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Artist',
      required: true,
    },
    featuring: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Artist',
      required: true,
    },
    releaseType: {
      type: String,
      enum: ['Track', 'Mix'],
    },
    tracks: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Track',
      required: true,
    },
    label: {
      type: String,
      required: true,
      maxlength: 100,
    },
    coverImage: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: String,
      required: true,
    },
    credits: {
      type: String,
      maxlength: 300,
    },
  },
  { timestamps: true }
);

const Release: mongoose.Model<mongoose.Document, {}> = mongoose.model(
  'Release',
  ReleaseSchema
);

export default Release;
