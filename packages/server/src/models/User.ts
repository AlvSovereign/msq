import mongoose, { Schema } from 'mongoose';
import { nanoid } from 'nanoid';

const UserSchema: mongoose.Schema = new Schema(
  {
    id: {
      type: String,
      default: () => nanoid(),
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 80,
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    verified: {
      type: Boolean,
      required: true,
    },
    accountType: {
      type: String,
      enum: ['BASIC', 'PREMIUM', 'SUPER'],
      required: true,
    },
    role: {
      type: String,
      enum: ['FAN', 'ARTIST'],
      required: true,
    },
    avatar: {
      type: String,
    },
    alias: {
      type: String,
      maxlength: 50,
    },
    // country: {
    //   type: [Country],
    // },
    // playlists: {
    //   type: [Playlist],
    // },
    // collectionsSaved: {
    //   type: [Collections],
    // },
    // following: {
    //   type: [Artist],
    // },
    // friends: {
    //   type: [User],
    // },
    // likedSongs: {
    //   type: [CollectionEntry],
    // },
    // settings: {
    //   type: Settings,
    // },
  },
  { timestamps: true }
);

const User: mongoose.Model<mongoose.Document, {}> = mongoose.model(
  'User',
  UserSchema
);

export default User;
