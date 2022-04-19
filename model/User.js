const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    photo: String,
    profil: Number,
    id: Number
});

userSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('User', userSchema);