// import router
const router = require('express').Router()

// import thought Controller
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController')

// Thoughts API
router.route('/').get(getThoughts).post(createThought)

// single Thought API
router.route('/:ThoughtID').get(getThought).put(updateThought).delete(deleteThought)

// Thought Reaction API
router.route('/:ThoughtID/Reactions/:ReactionID').post(addReaction).delete(removeReaction)

// export Thought router
module.exports = router