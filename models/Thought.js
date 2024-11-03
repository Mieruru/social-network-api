const { Schema, model } = require('mongoose')

// import Reaction model
const reactionSchema = require('./Reaction')

// thought model schema
const thoughtSchema = new Schema(
  {
    // thoughtText: requires string, required, length of 1-280 characters
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },

    // createdAt: requires date, default to current, format to local
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString()
    },

    // username: requires string, required
    username: {
      type: String,
      required: true
    },

    // reactions: refer to reactionSchema
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
)

// reactionCount: virtual to get length of uthought's reactions array
userSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

// create Thought model from userSchema
const Thought = model('Thought', thoughtSchema)

// export User model
module.exports = Thought