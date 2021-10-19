const mongoose = require('mongoose')
require('dotenv').config()

const DB_HOST = process.env.DB_HOST

const connectMongoDb = async () => {
  return mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
}

module.exports = {
  connectMongoDb
}
