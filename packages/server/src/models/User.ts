import mongoose, { Schema } from 'mongoose';
import { nanoid } from 'nanoid';
import bcrypt from 'bcrypt';

const UserSchema: Schema = new Schema(
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
    password: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
      default: () => {
        const randomString = nanoid();
        return `User-${randomString}`;
      },
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
    accountType: {
      type: String,
      enum: ['BASIC', 'PREMIUM', 'SUPER'],
      default: 'BASIC',
      required: true,
    },
    role: {
      type: String,
      enum: ['FAN', 'ARTIST'],
      default: 'FAN',
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

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

const User: mongoose.Model<mongoose.Document, {}> = mongoose.model(
  'User',
  UserSchema
);

export default User;
