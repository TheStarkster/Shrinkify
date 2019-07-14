const mongoose = require('mongoose');

const links = new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortId:{
        type:String,
        required:true
    },
});

const Links = mongoose.model('Links',links);
module.exports = Links;