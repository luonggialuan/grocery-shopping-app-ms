const express = require('express')
const cors = require('cors')
const { customer, products, shopping } = require('./api')
const HandleErrors = require('./utils/error-handler')
const appEvents = require('./api/app-events')

module.exports = async (app, channel) => {
  app.use(express.json({ limit: '1mb' }))
  app.use(express.urlencoded({ extended: true, limit: '1mb' }))
  app.use(cors())
  app.use(express.static(__dirname + '/public'))

  //Listener
  // appEvents(app)

  //api
  shopping(app, channel)

  // error handling
  app.use(HandleErrors)
}
