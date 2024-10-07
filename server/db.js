const mongoose = require('mongoose');

const mongoDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://projects:9025679255@kalandhar.0f6nl.mongodb.net/?retryWrites=true&w=majority&appName=kalandhar', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully:', conn.connection.host);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = mongoDb;
