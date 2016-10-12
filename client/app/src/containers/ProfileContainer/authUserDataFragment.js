import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

export const authUserDataFragment = createFragment(
  gql`
    fragment authUserData on AuthUser {
      id
      bio
      email
      name
      avatar
      employer
      authToken: auth_token
      events {
        name
        id
      }
    }
  `
);


export default authUserDataFragment;
