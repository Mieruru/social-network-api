const { Schema, model } = require('mongoose')

// user model schema
const userSchema = new Schema(
  {
    // username: requires string, unique, required, trimmed
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },

    // email: requires string, required, unique, matching valid email address (mongoose)
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match a valid email address']
    },

    // thoughts: refer to Thought model by _id
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],

    // friends: refer to User model by _id
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
)

// friendCount: virtual to get length of user's friend array
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

// create User model from userSchema
const User = model('User', userSchema)

// export User model
module.exports = User