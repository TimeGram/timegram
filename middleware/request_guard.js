const express = require('express')

const request_guard = (request, response, next) => {
  console.log(request.body, request.locals.request_guard_required)
  request.body.hasOwnProperty('media')
  next()

}

module.exports.request_guard = request_guard
