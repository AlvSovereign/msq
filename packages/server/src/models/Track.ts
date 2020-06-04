import mongoose, { Schema } from 'mongoose';
import { nanoid } from 'nanoid';

const TrackSchema: Schema = new Schema(
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
    number: {
      type: String,
      required: true,
      default: 1,
    },
    url: {
      type: String,
      required: true,
    },
    performedBy: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Artist',
        required: true,
      },
    ],
    producedBy: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Artist',
        required: true,
      },
    ],
    coverImage: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
      maxlength: 100,
    },
    plays: {
      type: Number,
      default: 0,
    },
    genre: {
      type: [String],
      enum: [
        'KIZOMBA',
        'URBAN_KIZ',
        'GHETTO_ZOUK',
        'AFROBEATS',
        'SALSA',
        'BACHATA',
        'SWING',
        'NEW_STYLE_HUSTLE',
        'BRAZILIAN_ZOUK',
      ],
      required: true,
    },
    credits: {
      type: String,
      maxlength: 300,
    },
  },
  { timestamps: true }
);

const Track: mongoose.Model<mongoose.Document, {}> = mongoose.model(
  'Track',
  TrackSchema
);

export default Track;
