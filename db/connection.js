const mongoose = require('mongoose')
require('dotenv').config()

const { DB_USER, DB_USER_PASS, DB_NAME } = process.env


const DB_HOST = `mongodb+srv://${DB_USER}:${DB_USER_PASS}@cluster0.kvh72.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

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
