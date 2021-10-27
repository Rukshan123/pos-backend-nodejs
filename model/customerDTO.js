const mongoose = require('mongoose')

const CustomerDTO = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  customerFirstName: {
    type: String,
    required: true,
  },
  customerLastName: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  customerContactNumber: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('customer', CustomerDTO)
