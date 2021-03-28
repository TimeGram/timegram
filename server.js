const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const path = require('path')

const app = express()

// Extend routes
business = require('./routes/business')
require('dotenv').config()

// FUnction: COnnect to mongoDB
mongoose.connect(process.env.MONGOURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error){
      console.log('Failed to Connect to MongoDB')
      return
    }
    console.log(`Connected to MongoDB`)
  })

// Function: Used to dish out index.html
app.use(express.static(path.join(__dirname, 'public')));
// Use body parser to read data from the body
app.use(body_parser.json())
// Route: Out-source all requests made to /business
app.use('/business', business)

// Route: Get all other routes. Return 404
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html')
})

// FUnction: Start up server at process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`Backend Server is Up!! \nhttp://${process.env.HOST}:${process.env.PORT}`)
})
