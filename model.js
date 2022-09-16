const mongoose = require('mongoose');

var schema=new mongoose.Schema({
    name : String,
    email : String,
    gender : String,
    status : String
});

module.exports = mongoose.model('schema',schema);