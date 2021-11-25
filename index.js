const express = require('express')
const cron = require('node-cron')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// -- Routes --
const status = require('./routes/status')
app.use('/status', status)

// -- Scheduler --
cron.schedule('0 0 * * * *', () => {
  console.log('Running status collection every hour.')
})

module.exports = app
