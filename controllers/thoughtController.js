// import models
const { User, Thought } = require('../models')

module.exports = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find()

      // return all thoughts
      res.json(thoughts)

    } catch (err) {
      res.status(500).json(err)
    }
  },

  // get a single thought by ID
  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      // 404 if thought is not found
      if (!thought) {
        return res.status(404).json({ message: `No thought matching ID found` })
      }

      // return thought
      res.json(thought)

    } catch (err) {
      res.status(500).json(err)
    }
  },

  // create new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body)

      // find user and add thought to users thoughts array
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } }
      )

      // return new thought
      res.json(thought)

    } catch (err) {
      res.status(500).json(err)
    }
  },

  // update thought by ID
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )

      // 404 if thought is not found
      if (!thought) {
        return res.status(404).json({ message: `No thought matching ID found` })
      }

      // return updated thought
      res.json(thought)

    } catch (err) {
      res.status(500).json(err)
    }
  },

  // delete thought by ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })

      // 404 if thought is not found
      if (!thought) {
        return res.status(404).json({ message: `No thought matching ID found` })
      }

      // remove thought from user's thought array
      await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } }
      )

      // confirm thought deletion
      res.json({ message: `Thought successfully deleted.` })

    } catch (err) {
      res.status(500).json(err)
    }
  },

  // add reaction by ID
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )

      // 404 if thought is not found
      if (!thought) {
        return res.status(404).json({ message: `No thought matching ID found` })
      }

      // return updated thought
      res.json(thought)

    } catch (err) {
      res.status(500).json(err)
    }
  },

  // remove reaction by ID
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      )

      // 404 if thought is not found
      if (!thought) {
        return res.status(404).json({ message: `No thought matching ID found` })
      }

      // return updated thought
      res.json(thought)

    } catch (err) {
      res.status(500).json(err)
    }
  }
}