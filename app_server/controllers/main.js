const index = (req, res) => {
    res.render('index', {
        title: 'Home | Plex',
        name: 'Plex'
    });
};

module.exports = {
    index
}