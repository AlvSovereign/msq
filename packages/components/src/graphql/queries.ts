import gql from 'graphql-tag';

const GET_ME = gql`
  query GetMe {
    me {
      id
      name
      email
      createdAt
      isVerified
      isRegistered
      accountType
      role
      avatar
      alias
      token
    }
  }
`;

const SIGNIN = gql`
  query SocialSignin($input: SocialSigninUserInput!) {
    socialSignin(input: $input) {
      id
      email
      name
      token
      isRegistered
    }
  }
`;

const ADD_TOKEN_TO_CACHE = gql`
  query AddTokenToCache {
    token @client
  }
`;

export { GET_ME, SIGNIN, ADD_TOKEN_TO_CACHE };
