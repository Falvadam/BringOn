const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
    },
    interests: [String],
    image: {
      type: String,
      default: '/default-profile.png'
    }
  },{
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })

module.exports = model('User', userSchema)