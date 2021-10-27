const CustomerDTO = require('../model/customerDTO')

const saveCustomer = (req, resp) => {
  const customer = new CustomerDTO({
    customerId: req.body.customerId,
    customerFirstName: req.body.customerFirstName,
    customerLastName: req.body.customerLastName,
    customerAddress: req.body.customerAddress,
    customerContactNumber: req.body.customerContactNumber,
  })

  customer
    .save()
    .then((result) => {
      resp.status(200).json({ isSaved: true, data: result })
    })
    .catch((err) => {
      resp.status(500).json(err)
    })
}

const deleteCustomer = (req, res) => {}

const updateCustomer = (req, res) => {}

const getAllCustomers = (req, res) => {}

const getCustomerById = (req, res) => {}
