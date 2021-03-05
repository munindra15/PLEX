var express = require('express');
var router = express.Router();
const ctrlMovie = require('../controllers/movie');

router
    .route('/movies')
    .get(ctrlMovie.getMovies)
    .post(ctrlMovie.createMovies);

router
    .route('/movies/:movieid')
    .get(ctrlMovie.getSingleMovie)
    .put(ctrlMovie.updateMovie)
    .delete(ctrlMovie.deleteMovie);

router
    .route('/movies/:movieid/')

    module.exports = router;