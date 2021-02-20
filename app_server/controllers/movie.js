/* Array of objects for movies */
movieArray = [{
    movie_title: "Sausage Party",
    release_date: "2016",
    genre: "Comedy",
    duration: "1h 29m"
},{
    movie_title: "Parasite",
    release_date: "2019",
    genre: "Thriller",
    duration: "2h 12m"
}, {
    movie_title: "Tenet",
    release_date: "2020",
    genre: "Action/Sci-Fi",
    duration: "2h 30m"
}, {
    movie_title: "John Wick 3",
    release_date: "2019",
    genre: "Action/Thriller",
    duration: "2h 23m"
}, {
    movie_title: "Warcraft",
    release_date: "2016",
    genre: "Fantasy/Action",
    duration: "2h 3m"
}]

const movielist = (req, res) => {
    res.render('movie-list', {title: 'Movie List | Plex', movies:movieArray});
};

const display = (req, res) => {
    res.render('display', {title: 'Not Implemented', movies:movieArray});
};

module.exports = {
    movielist, display
}