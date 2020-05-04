import gql from 'graphql-tag';

const SIGNIN = gql`
  mutation SocialSignin($input: SocialSigninUserInput!) {
    socialSignin(input: $input) {
      id
      email
      name
      token
      isRegistered
    }
  }
`;

export { SIGNIN };
