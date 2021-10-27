const express = require('express')

const CustomerController = require('../controller/CustomerController')

const router = express.Router()

router.post('/saveCustomer', CustomerController.saveCustomer)

module.exports = router
