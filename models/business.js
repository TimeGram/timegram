const mongoose = require('mongoose')

const business_model = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  email : String,
  address : String,
  category : String,
  description : String,
  access_code : {
    code : String,
    created : {
      year : Number,
      month : Number,
      day : Number,
      // Non Essential
      hour : Number,
      minute : Number,
      second : Number
    }
  },

  // Non Essential
  availability : {
    days : {
      sunday : {
        is_holiday : Boolean,
        times : Array
      },
      monday : {
        is_holiday : Boolean,
        times : Array
      },
      tuesday : {
        is_holiday : Boolean,
        times : Array
      },
      wednesday : {
        is_holiday : Boolean,
        times : Array
      },
      thursday : {
        is_holiday : Boolean,
        times : Array
      },
      friday : {
        is_holiday : Boolean,
        times : Array
      },
      saturday : {
        is_holiday : Boolean,
        times : Array
      }
    },
    is_holiday : Boolean,
    hourly_limit : Number,
    daily_limit : Number,
    weekly_limit : Number,
    monthly_limit : Number
  },
  services : Array,
  owner : Array,
  staff : Array,

  website : Array,
  billing : {
    //add stuff here
    money : Number,
  },
  created : {
    year : Number,
    month : Number,
    day : Number,
    // Non Essential
    hour : Number,
    minute : Number,
    second : Number
  }
})

module.exports = mongoose.model('business_model', business_model)
