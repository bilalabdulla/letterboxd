const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true 
    },
    Actors: {
        type: String,
        required: true 
    },
    Poster: {
        type: String,
        required: true 
    }
}, {timestamps: true})

module.exports = mongoose.model('MovieTest', MovieSchema)