const { gql } = require('apollo-server-express');

const typeDefs = gql`

    input BookInput{
          authors: String
          description: String!
          bookId: String!
          image: String
          link:  String
          title: String!
    }

    type Book {
        bookId: String!
        authors: String
        description: String!
        title: String!
        image: String
        link: String
        
    }

    type User{
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query{
        getSingleUser(userId: ID!): User
        users: [User]
    }

    type Mutation{
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook( input: BookInput): User
        deleteBook(bookId: String!): User
    }

    


`;

module.exports = typeDefs;