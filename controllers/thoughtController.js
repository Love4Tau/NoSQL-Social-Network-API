const { Thought, User } = require("../models");

const thoughtController ={
    getAllThoughts(req, res) {
        Thought.find({})
            .then((thoughts) => {
                res.status(200).json(thoughts);
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    
    },

    //Get thought by ID

    getThoughtsById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) => {
            if(!thought) {
                res.status(404).json({ message: "Not found!" });
            } else {
                res.status(200).json(thought);
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        });
    },

    //add-Create thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            res.status(200).json(thought);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    },

    //Delete Thought
    deleteThought(req, res) {
        Thought.findByIdAndDelete({ _id: req.params.thoughtId })
        .then((thought) => {
            res.status(200).json({ message: "Thought Deleted!" });
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },

    //Update thought
    updateThoughtById(req, res) {
        Thought.findByIdAndUpdate( req.params.thoughtId, req.body, {
            new: true
        })
        .then((thought) => {
            if(!thought) {
                res.status(404).json({ message: "Not found!" });
            } else {
                res.status(200).json(thought);
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    },

    //Add-Create Reaction
    createReaction(req, res) {
        Thought.findByIdAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true},
        )
        .then((thought) => {
            if(!thought) {
                res.status(404).json({message: "Not found"})
            } else {
                res.status(200).json(thought)
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    },

    //Delete Reaction
    deleteReaction(req, res) {
        Thought.findByIdAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true},
        )
        .then((thought) => {
            if(!thought) {
                res.status(404).json({message: "Not found"})
            } else {
                res.status(200).json({ message: "Reaction Deleted! "})
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    },
};

module.exports = thoughtController;


