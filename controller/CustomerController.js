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

const getAllCustomers = (req, resp) => {
  try {
    CustomerDTO.find()
      .then((result) => {
        resp.status(200).json({ data: result })
      })
      .catch((error) => {
        resp.status(500).json(error)
      })
  } catch (e) {}
}

const getCustomerById = (req, res) => {}

module.exports = {
  saveCustomer,
  deleteCustomer,
  updateCustomer,
  getAllCustomers,
  getCustomerById,
}
