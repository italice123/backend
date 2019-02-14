const express = require('express')
const app = express()
const bodyParser = require('body-parser')

module.exports = function () {
  app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
  })
  // configure the app to use bodyParser()
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.use(bodyParser.json())
  require('../routes/backend.routes')(app)
  return app
}
