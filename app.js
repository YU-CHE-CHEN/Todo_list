const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connect to mongodb
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

//setting route
app.get('/', (req, res) => {
  res.send('Hello!')
})

//setting port
app.listen(3000, () => {
  console.log('App is running on localhost: 3000.')
})