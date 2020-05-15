import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

class AuthenticationDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const resolver: any = field.resolve || defaultFieldResolver;

    field.resolve = async (root: any, args: any, ctx: any, info: any) => {
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
