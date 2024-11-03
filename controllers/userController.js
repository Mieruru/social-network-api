// import models
const { User, Thought } = require('../models')

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find()

      // return all users
      res.json(users)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // get a single user by ID
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })

      // 404 if user is not found
      if (!user) {
        return res.status(404).json({ message: `No user matching ID found` })
      }

      // return user
      res.json(user)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // create new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body)

      // return new user
      res.json(user)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // update user by ID
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )

      // 404 if user not found
      if (!user) {
        return res.status(404).json({ message: `No user matching ID found` })
      }

      // return updated user
      res.json(user)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // delete user by ID
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId })

      // 404 if user not found
      if (!user) {
        return res.status(404).json({ message: `No user matching ID found` })
      }

      // delete thoughts associated with user
      await Thought.deleteMany({ _id: { $in: user.thoughts } })

      // confirm user deletion
      res.json({ message: `Used successfully deleted. Thoughts by user successfully deleted.` })

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // add friend by ID
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )

      // 404 if user not found
      if (!user) {
        return res.status(404).json({ message: `No user matching ID found` })
      }

      // return updated user
      res.json(user)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // remove friend by ID
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      )

      // 404 if user not found
      if (!user) {
        return res.status(404).json({ message: `No user matching ID found` })
      }

      // return updated user
      res.json(user)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}