const app = require('../app')
const { connectMongoDb } = require('../db/connection')

const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectMongoDb()
    app.listen(PORT, () => {
      console.log(`Database connection successful. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.log('connection error')
    process.exit(1)
  }
}

start()
