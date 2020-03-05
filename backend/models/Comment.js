const { model, Schema } = require('mongoose')

const commentSchema = new Schema({
  comment: String,
  commentId: Schema.ObjectId
},{
  timestamps: false,
  versionKey: false
})

module.exports = model('Comment', commentSchema)
