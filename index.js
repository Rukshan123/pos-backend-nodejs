const express = require('express')
const mongoose = require('mongoose')

const CustomerRoute = require('./route/CustomerRoute')

const app = express()

const port = 3000
mongoose
  .connect('mongodb://localhost/pos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
  })
  .catch((err) => {
    console.log('try again' + err)
  })

app.use('./api/v1/customer', CustomerRoute)

// mongoose.connect('mongodb://localhost/pos', (err) => {
//   if (err) throw err
//   app.listen(3000, () => {
//     console.log('Server started on port 3000')
//   })
// })
