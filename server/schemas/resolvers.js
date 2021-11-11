const { User, Todo } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate('savedTodos');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {

    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser(parent, { username, email, password }) {
      const user = await User.create({ username, email, password });

      const token = signToken(user);
      return ({ token, user });
    },
    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    async login(parent, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong password!');
      }
      const token = signToken(user);
      return ({ token, user });
    },
    // save a note to a user's `savedTodos` field by adding it to the set (to prevent duplicates)
    // user comes from `req.user` created in the auth middleware function
    async saveTodo(parent, { task, date }, context) {
        
      if (context.user) {
        const todo = await Todo.create({ task, date });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedTodos: todo._id } },
          { new: true, runValidators: true }

        );
        return todo;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    async editTodo(parent, { todosId, task, date }, context) {

      if (context.user) {
        // Find and update the matching class using the destructured args
        const updatedTodo = await Todo.findByIdAndUpdate(
          { _id: todosId },
          { task },
          { new: true}
        );
        
        return updatedTodo;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    async editIsComplete(parent, { todosId, isComplete}, context) {

      if (context.user) {
        // Find and update the matching class using the destructured args
        const updatedTodo = await Todo.findByIdAndUpdate(
          { _id: todosId },
          { isComplete },
          { new: true}
        );
    
        return updatedTodo;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    async deleteTodo(parent, { _id }, context) {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedTodos: { _id } } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
}




module.exports = resolvers;
