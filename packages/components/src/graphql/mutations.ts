import gql from 'graphql-tag';

const SIGNIN = gql`
  mutation Signin($input: SigninUserInput!) {
    signin(input: $input) {
      id
      email
      token
      isRegistered
    }
  }
`;

const SOCIAL_SIGNIN = gql`
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

export { SIGNIN, SOCIAL_SIGNIN };
