const movielist = (req, res) => {
    res.render('movie-list', {title: 'Movie List | Plex'});
};

const display = (req, res) => {
    res.render('display', {title: 'Not Implemented'});
};

module.exports = {
    movielist, display
}