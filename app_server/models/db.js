const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://plex-user:pass123@breckenridgecluster.pflts.mongodb.net/plex?retryWrites=true&w=majority';
mongoose.connect(dbURI,{dbName: 'plex'});

mongoose.connection.on('connected', () => {
    console.log('- - - - - - - - - - - - - - - - - -');
    console.log('- - - - - - - - - - - - - - - - - -');
    console.log('- Mongoose connected to ${dbURI} -');
    console.log('- - - - - - - - - - - - - - - - - -');
    console.log('- - - - - - - - - - - - - - - - - -');
});

mongoose.connection.on('error', err  => {
    console.log('- - - - - - - - - - - - - - - - - -');
    console.log('Mongoose connection error: ', err);
    console.log('- - - - - - - - - - - - - - - -');
});

mongoose.connection.on('disconnected', () => {
    console.log('- - - - - - - - - - - - -');
    console.log('- - - - - - - - - - - - -');
    console.log("- Mongoose disconnected -");
    console.log('- - - - - - - - - - - - -');
    console.log('- - - - - - - - - - - - -');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log('- - - - - - - - - - - - - - - - - - - - - - -');
        console.log(`Mongoose disconnected through ${msg}`);
        console.log('- - - - - - - - - - - - - - - - - - - - - - -');
        callback();
    });
};

process.once('SIGUSR2', () => {
        gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
        gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
        gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./movie');