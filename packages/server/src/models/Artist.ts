import mongoose, { Schema } from 'mongoose';
import { nanoid } from 'nanoid';

const ArtistSchema: Schema = new Schema(
  {
    id: {
      type: String,
      default: () => nanoid(),
    },
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 80,
    },
    avatar: String,
    releases: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Release' }],
    owner: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    fans: { type: [mongoose.SchemaTypes.ObjectId], ref: 'User' },
    country: {
      type: [String],
      required: true,
    },
    biography: { type: String, maxlength: 2000 },
    tag: { type: String, maxlength: 80 },
    socialLinks: { type: Object },
    website: String,
    galleryImages: [String],
  },
  { timestamps: true }
);

const Artist: mongoose.Model<mongoose.Document, {}> = mongoose.model(
  'Artist',
  ArtistSchema
);

export default Artist;
