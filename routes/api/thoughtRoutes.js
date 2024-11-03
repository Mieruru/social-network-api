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
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought)

// Thought Reaction API
router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(removeReaction)

// export Thought router
module.exports = router