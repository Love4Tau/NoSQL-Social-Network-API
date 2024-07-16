// const { connect, connection } = require('mongoose');
const mongoose = require("mongoose");

// const connectionString = process.env.MONGODB_URL;
const connectionString = "mongodb://127.0.0.1:27017/socialnetwork";

mongoose.connect(connectionString, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

module.exports = mongoose.connection;