
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const arrOptSubscription = ['starter', 'pro', 'business']

const schemaUser = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: arrOptSubscription,
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  }

}, { versionKey: false, timestamps: true })

const User = model('user', schemaUser)

module.exports = {
  User,
  arrOptSubscription
}
