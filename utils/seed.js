const mongoose = require("mongoose");
const { Thought, User } = require("../models");

const userSeed = [
    {
        username: "lovetau",
        email: "love@tau.com"
    },

    {
        username: "saloftau",
        email: "salof@tau.com"
    }
];

const thoughtSeed = [
    {
        "thoughtText": "This is a test.",
        "username": "love4tau"
    },

    {
        "thoughtText": "This is a second test.",
        "username": "saloftau"
    }
]

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lovelysocialnetwork", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    //Got warning - these are now deprecated
});

function seedNetDB() {
    User.deleteMany({})
    .then(() => {
        return Thought.deleteMany({});
    })
    .then(() => {
        User.insertMany(userSeed);
    })
    .then((users) => {
        seedThoughts[0].userId = users[0]._id;
        seedThoughts[1].userId = users[1]._id;
        return Thought.insertMany(thoughtSeed);
    })
    .then((thoughts) => {
        return User.findByIdAndUpdate(users[0]._id, {$push: {thoughts: thoughts[0]._id}});
    })
    .then(() => {
        return User.findByIdAndUpdate(users[1]._id, {$push: {thoughts: thoughts[1]._id}});
    })
    .then(() => {
        mongoose.connection.close();
    })
    .catch((err) => {
        mongoose.connection.close();
    })
};

seedNetDB().catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });