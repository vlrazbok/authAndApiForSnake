const {Schema, model} = require('mongoose')

const schema = new Schema({
  users: {type: Array, required: true}
})
model.exports = model('User', schema)