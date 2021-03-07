const mongoose = require('mongoose');
const movieModel = mongoose.model('movie');

const getMovies = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};

const createMovies = (req, res) => {
    movieModel.create({
        title: req.body.name,
        genre: req.body.genre.split(','),
        release_year: req.body.year,
        duration: res.body.duration,
        rating: res.body.rating
    },
    (err, movie) => {
        if(err){
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(movie);
        }
    });
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