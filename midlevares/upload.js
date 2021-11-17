// const express = require('express')
const multer = require('multer')
const path = require('path')

const tmpDir = path.resolve('tmp')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpDir)
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    fileSize: 5242880
  }

})

const upload = multer({ storage: storage })

module.exports = { upload }
