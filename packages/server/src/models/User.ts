import mongoose, { Schema } from 'mongoose';
import { nanoid } from 'nanoid';
import bcrypt from 'bcrypt';
import { AccountType, Role } from 'components/src/graphql/generated/graphql';

const UserSchema = new Schema(
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
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    isRegistered: {
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
    artist: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Artist',
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

UserSchema.pre<IUser>('save', function(next) {
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

UserSchema.methods.checkPassword = function(password: string) {
  const passwordHash = this.password;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

const User: mongoose.Model<IUser> = mongoose.model('User', UserSchema);

export default User;

export interface IUser extends mongoose.Document {
  id: string;
  email: string;
  password: string;
  name: string;
  isVerified: boolean;
  isRegistered: boolean;
  accountType: AccountType;
  role: Role;
  avatar: string;
  alias: string;
  artist: string;
}
