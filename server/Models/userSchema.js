let mongoose = require('mongoose')

let userschema = mongoose.Schema({
    name1: String,
    name2: String,
    email: String,
    phone: Number,
    password: String
})

module.exports = mongoose.model('user' , userschema)