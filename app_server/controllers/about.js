const about = (req, res) => {
    res.render('about', {title: 'About Us | Plex', heading: 'About Us'});
};

module.exports = {
    about
};