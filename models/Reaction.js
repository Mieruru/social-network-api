const { Schema, Types } = require('mongoose')

const reactionSchema = new Schema(
  {
    // reactionID: requires ObjectID, default to new ObjectID
    reactionID: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId
    },

    // reactionBody: requires string, required, 280 character maximum
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },

    // username: requires string, required
    username: {
      type: String,
      required: true
    },

    // createdAt: requires date, default to current, format to local
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString()
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
)

// export subdocument
module.exports = reactionSchema