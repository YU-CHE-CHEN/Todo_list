const express = require('express')
const app = express()

//setting route
app.get('/', (req, res) => {
  res.send('Hello!')
})

//setting port
app.listen(3000, () => {
  console.log('App is running on localhost: 3000.')
})