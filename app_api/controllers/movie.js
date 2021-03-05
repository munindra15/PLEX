const mongoose = require('mongoose');
const movieModel = mongoose.model('movie');

const getMovies = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};

const createMovies = (req, res) => {
    res
    .status(201)
    .json({"status" : "Success"});
};

const getSingleMovie = (req, res) => {
    movieModel
    .findById(req.params.movieid)
    .exec((err, movies) => {
        if (!movies){
            return res
                    .status(404)
                    .json({"message" : "Movie not found"});
        } else if(err) {
            return res
                    .status(404)
                    .json(err);
        }
        res
        .status(200)
        .json(movies);
    });
};

const updateMovie = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};

const deleteMovie = (req, res) => {
    res
    .status(204)
    .json({"Status" : "Success"});
};

module.exports = {
    getMovies,
    createMovies,
    getSingleMovie,
    updateMovie,
    deleteMovie
}