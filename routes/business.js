const express = require('express')
const business = express.Router()

// Middle ware to check and validate request_data
const request_guard = require('../middleware/request_guard').request_guard

// Mongoose Models
const MD_BUSINESS = require('../models/business')

// Route: Sign up business
// console.log())
// var request_guard_required = []
// MD_BUSINESS.schema.eachPath(function(path) {
//     request_guard_required.push(path)
// });
// console.log(request_guard_required)
console.log(Object.keys(MD_BUSINESS.schema.tree))
request.locals.request_guard_required = Object.keys(MD_BUSINESS.schema.tree)

business.post('/signup', request_guard, (request, response) => {
  response.json({ message: 'swswsws' })
})

// Route: Sign in business

// Route: Update availability


// ROute: Create booking

// Route: Update booking

// Route: Delete booking

// Route: COmplete booking

// Route: Remind client of booking


// Route: Create client

// Route: Client pay

//









// Export business-router module
module.exports = business
