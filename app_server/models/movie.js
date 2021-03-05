const mongoose = require('mongoose');

const criticShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    association: String,
    date: {
        type: Date,
        required: true
    },
    criticText: String
});

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: [String]
    },
    release_year:{
        type: Date,
        required: true
    },
    duration:{
        type: String
    },
    rating:{
        type: Number,
        'default': 0,
        min: 0,
        max: 100
    },
    critic: [criticShema]
});

mongoose.model('movie', movieSchema);