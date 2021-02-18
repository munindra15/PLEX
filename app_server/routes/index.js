var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlabout = require('../controllers/about');
const ctrlmovie = require('../controllers/movie');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET About page */
router.get('/about', ctrlabout.about);

/* GET movie page. Given route name /movie instean of /list because it suits the website topic. */
router.get('/movie', ctrlmovie.movielist);

/* GET display page */
router.get('/display', ctrlmovie.display);

module.exports = router;
