import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver, GraphQLString } from 'graphql';

class AuthenticationDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const resolver = field.resolve || defaultFieldResolver;

    field.resolve = async (root, args, ctx, info) => {
      if (!ctx.user) {
        throw new AuthenticationError(
          'User is not authenticated to perform this operation'
        );
      }

      return resolver(root, args, ctx, info);
    };
  }
}

export { AuthenticationDirective };
