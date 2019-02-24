import mongoose from 'mongoose'
import pick from 'lodash.pick'
import bcrypt from 'bcryptjs'

mongoose.set('useCreateIndex', true)

// Create a schema
const schema = {
  email: {
    type: String,
    required: [true, 'Please enter your email address'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    trim: true,
    minLength: 6
  },
  username: {
    type: String,
    trim: true
  },
  photoURL: String,
  bio: String,
  url: String,
  isAdmin: Boolean
}

// Create the model
const userSchema = new mongoose.Schema(schema, {
  timestamps: true
})

// Hash passwords before saving to database
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } else {
    next()
  }
})

// Choose user data to send back to client
userSchema.methods.toJSON = function() {
  let userObject = this.toObject()
  return pick(userObject, [
    '_id',
    'email',
    'username',
    'bio',
    'url',
    'photoURL'
  ])
}

// Export the model
export const User = mongoose.model('user', userSchema)
