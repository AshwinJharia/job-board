
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('paste-url-here', {

        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
