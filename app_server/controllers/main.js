const index = (req, res) => {
    res.render('index', {title: 'Home | Plex'});
};

module.exports = {
    index
}