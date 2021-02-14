const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true, unique: true},
  score: {type: String, required: true} 
})

module.exports = model('User', schema)
