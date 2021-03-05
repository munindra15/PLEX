/* Array of objects for movies */
movieArray = [{
    movie_title: "Black Box",
    release_year: 2020,
    genre: "Mystery and Thriller",
    duration: "1h 40m",
    rating: 70
},{
    movie_title: "The Lodge",
    release_year: 2020,
    genre: "Mystery, Thriller and Horror",
    duration: "1h 48m",
    rating: 80
},{
    movie_title: "Parasite",
    release_year: 2019,
    genre: "Thriller",
    duration: "2h 12m",
    rating: 60
}, {
    movie_title: "Tenet",
    release_year: 2020,
    genre: "Action/Sci-Fi",
    duration: "2h 30m",
    rating: 90
}, {
    movie_title: "John Wick 3",
    release_year: 2019,
    genre: "Action/Thriller",
    duration: "2h 23m",
    rating: 80,
    critic: [{
        name: "Joe Morgenstern",
        date: "Feb 2019",
        assosiation: "Wall Street Journal",
        text: "A refresher course, and a liberating one, in the nature of escapist entertainment."
    }]
}, {
    movie_title: "Warcraft",
    release_year: 2016,
    genre: "Fantasy/Action",
    duration: "2h 3m",
    rating: 70
}, {
    movie_title: "The Wretched",
    release_year: 2020,
    genre: "Mystery, Thriller and Horror",
    duration: "1h 35m",
    rating: 75
}, {
    movie_title: "To all the Boys: P.S. I still love you",
    release_year: 2020,
    genre: "Romance, Comedy",
    duration: "1h 41m",
    rating: 65
}, {
    movie_title: "The Gentlemen",
    release_year: 2020,
    genre: "Comedy. Crime, Drama",
    duration: "1h 53m",
    rating: 70
}, {
    movie_title: "The Croods: A new age",
    release_year: 2020,
    genre: "Adventure, Comedy",
    duration: "1h 35m",
    rating: 55
}, {
    movie_title: "Summerland",
    release_year: 2020,
    genre: "Drama",
    duration: "1h 39m",
    rating: 65
}, {
    movie_title: "Bad boys for life",
    release_year: 2020,
    genre: "Comedy, Action",
    duration: "2h 4m",
    rating: 75
}, {
    movie_title: "Birds of Prey",
    release_year: 2020,
    genre: "Comedy, Action",
    duration: "1h 49m",
    rating: 80
}, {
    movie_title: "The Broken hearts gallery",
    release_year: 2020,
    genre: "Romance",
    duration: "1h 50m",
    rating: 65
}, {
    movie_title: "Greyhound",
    release_year: 2020,
    genre: "Drama, History, War",
    duration: "1h 32m",
    rating: 70
}, {
    movie_title: "The Kid Detective",
    release_year: 2020,
    genre: "Comedy",
    duration: "1h 39m",
    rating: 60
}, {
    movie_title: "Dick johnson is dead",
    release_year: 2020,
    genre: "Documentary",
    duration: "1h 29m",
    rating: 70
}, {
    movie_title: "Welcome to Chechnya",
    release_year: 2020,
    genre: "Documentary, Gay and Lesbian",
    duration: "1h 47m",
    rating: 55
}, {
    movie_title: "All in: The fight for democracy",
    release_year: 2020,
    genre: "Documentary",
    duration: "1h 42m",
    rating: 65
}, {
    movie_title: "One Night in Miami",
    release_year: 2020,
    genre: "Drama",
    duration: "1h 50m",
    rating: 75
}, {
    movie_title: "The Fight",
    release_year: 2020,
    genre: "Documentary",
    duration: "1h 36m",
    rating: 60
}, {
    movie_title: "Shaun the sheep: Farmageddon",
    release_year: 2020,
    genre: "Adventure, Animation, Comedy",
    duration: "1h 27m",
    rating: 80
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