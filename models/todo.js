const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String, //data type must be string
    requred: true //required field
  }
})

module.exports = mongoose.model('Todo', todoSchema)