const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
      users: async() =>{
        return User.find();
      },

      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('savedBooks');
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      
    },

    Mutation: {
        createUser: async(parent, {username, email, password}) => {
          const user = await User.create({username, email, password});

            if (!user) {
                console.log(" user was not created");
            }
            const token = signToken(user);
            return {token, user};
        },

        login: async (parent, {email, password}) =>{
            const user = await User.findOne({email});

            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async(parent, {bookToSave}, context) =>{
            
            if(context.user){
              console.log(bookToSave);
              return User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: bookToSave } },
                { new: true }
              );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
        deleteBook: async (parent, {bookId}, context) =>{
          if(context.user){
            return User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );
            }
              throw new AuthenticationError('You need to be logged in!');
        },


    }

}

module.exports = resolvers;