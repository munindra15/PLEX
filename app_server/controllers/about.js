const about = (req, res) => {
    res.render('about', {
        title: '- About Us -', 
        para: 'Founded in February of 2021 and based in Kitchener, Ontario, Plex is a trusted online movie store for people looking to watch, stream and have an amazing experience getting entertained - online or from mobile phone or tablet. We started as a school project and made it a reality into developing the online entertainment service. With constant upvote by our customers, plex is getting wide exposure around the globe.'
    });
};

module.exports = {
    about
};