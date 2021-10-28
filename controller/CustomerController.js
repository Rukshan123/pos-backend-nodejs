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

const deleteCustomer = (req, res) => {
  CustomerDTO.deleteOne({ customerId: req.headers.id })
    .then((result) => {
      if (result.deletedCount > 0) {
        resp.status(200).json({ isDeleted: true })
      } else {
        resp.status(200).json({ isDeleted: false })
      }
    })
    .catch((error) => {
      resp.status(500).json(error)
    })
}

const updateCustomer = (req, resp) => {
  CustomerDTO.updateOne(
    { customerId: req.body.customerId },
    {
      $set: {
        customerFirstName: req.body.customerFirstName,
        customerLastName: req.body.customerLastName,
        customerAddress: req.body.customerAddress,
        customerContactNumber: req.body.customerContactNumber,
      },
    }
  )
    .then((result) => {
      if (result.modifiedCount > 0) {
        resp.status(200).json({ isUpdated: true })
      } else {
        resp.status(200).json({ isUpdated: false })
      }
    })
    .catch((err) => {
      resp.status(500).json({ err })
    })
}

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

const getCustomerById = (req, res) => {
  CustomerDTO.findOne({ customerId: req.headers.id })
    .then((result) => {
      resp.status(200).json(result)
    })
    .catch((error) => {
      resp.status(500).json(error)
    })
}

module.exports = {
  saveCustomer,
  deleteCustomer,
  updateCustomer,
  getAllCustomers,
  getCustomerById,
}
