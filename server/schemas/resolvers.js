const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
        getSingleUser: async (parent, {userId}) => {
          return User.findOne({ _id: userId });
        },

        users: async ()=>{
          return User.find({});
        }
      /*
        getSingleUser: async({ user = null, params }, res) =>{
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
              });
          
              if (!foundUser) {
                return res.status(400).json({ message: 'Cannot find a user with this id!' });
              }
          
              res.json(foundUser);
        }*/
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
        saveBook: async(parent, {input}, context) =>{
            
            if(context.user){
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: input } },
                { new: true, runValidators: true }
              );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
        deleteBook: async (parent, {bookId}, context) =>{
          if(context.user){
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
              );
            }
              throw new AuthenticationError('You need to be logged in!');
        },


    }

}

module.exports = resolvers;