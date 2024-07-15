const { User } = require("../models");

const userController = {
    
    //Get Users
    getAllUsers(req, res) {
        User.find({})
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },

    //Get User
    getUserById(req, res) {
        User.findById( req.params.userId )
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    //Create User
    createUser(req, res) {
        User.create(req.body)
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },

    //Delete User
    deleteUserById(req, res) {
        User.findByOneAndUpdate(req.params.id)
        .then((user) => {
            if(!users) {
                res.status(404).json({ message: "Not Found! "})
            } else {
                res.status(200).json({ message: "Users and associated thoughts deleted!" });
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    //Update User
    updateUserById(req, res) {
        User.findByOneAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then((users) => {
            if(!users) {
                res.status(404).json({ messae: "Not Found!" })
            } else {
                res.status(200).json(users);
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },

    //Add friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId}},
            { new: true }
        )
        .then((users) => {
            if(!users) {
                res.status(404).json({ message: "Not Found!" })
            } else {
                res.status(200).json(users)
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        });
    },

    //Delete friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId}},
            { new: true }
        )
        .then((users) => {
            if(!users) {
                res.status(404).json({ message: "Not Found!" })
            } else {
                res.status(200).json(users)
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
};

//Export usercontroller
module.exports = userController;