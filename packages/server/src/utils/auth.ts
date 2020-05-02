import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import { IUser } from '../typeDefs';
import models from '../models';

const secret = process.env.JWT_SECRET;

/**
 * takes a user object and creates  jwt out of it
 * using user.id and user.role
 * @param {Object} user the user to create a jwt for
 */
const createToken = ({ id, accountType, role }: IUser) =>
  jwt.sign({ id, role }, secret!);

/**
 * will attemp to verify a jwt and find a user in the
 * db associated with it. Catches any error and returns
 * a null user
 * @param {String} token jwt from client
 */
const getUserFromToken = async (tokenString: string) => {
  const token = tokenString && tokenString.split('Bearer ')[1];
  try {
    const userToken: any = jwt.verify(token, secret!);
    const user = await models.User.findOne({ id: userToken.id });

    return user;
  } catch (e) {
    return null;
  }
};

/**
 * checks if the user is on the context object
 * continues to the next resolver if true
 * @param {Function} next next resolver function ro run
 */
const authenticated = (next) => (root, args, context, info) => {
  if (!context.user) {
    throw new AuthenticationError(
      'User is not authenticated to perform this operation'
    );
  }

  return next(root, args, context, info);
};

/**
 * checks if the user on the context has the specified role.
 * continues to the next resolver if true
 * @param {String} role enum role to check for
 * @param {Function} next next resolver function to run
 */
const authorized = (role, next) => (root, args, context, info) => {
  if (role !== context.user.role) {
    throw new AuthenticationError(
      'User not authorized to perform this operation'
    );
  }

  return next(root, args, context, info);
};

export { getUserFromToken, authenticated, authorized, createToken };
