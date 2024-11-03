// import express and routes
const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')

// server port
const PORT = process.env.PORT || 3001
const app = express()

// define express and routes
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
  })
})
