import { gql } from '@apollo/client';

export const GET_ME =gql`
query getSingleUser($userId: ID!){
      getSingleUser(userId: $userId){
            username
            email
            password
    }
}
`;

