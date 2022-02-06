import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
         login(email: $email, password: $password) {
         token 
         profile {
         _id
         name
      }
    }
  }
`;

export const ADD_USER = qgl`

`;

export const SAVE_BOOK = gql`

`;

export const REMOVE_BOOK = gql`

`;