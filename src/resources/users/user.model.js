import mongoose from 'mongoose'
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

// Export the model
export const User = mongoose.model('user', userSchema)