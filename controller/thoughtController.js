const Thought = require('../models/thought');
const User = require('../models/User');

const thoughtController = {
     getAllThoughts: async ( req, res ) =>  {
        try {
            const results = await Thought.find()
            res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    getSingleThought: async ( req, res ) => {
        try {
            const results = await Thought.findOne({
                _id: req.params.thoughtId })
            res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    postNewThought: async (req, res) => {
        try {
            const results = await Thought.create(req.body)
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                { $push: {
                    thoughts: results._id
                }}
            )
            res.json(results)                
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    updateThought: async (req, res) => {
        try {
            const results = await Thought.findOneAndUpdate( 
                { _id: req.params.thoughtId},
                { $set: req.body},
                { runValidators: true, new: true}
            ) 
            res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    deleteThought: async (req, res) => {
        try {
            const results = await Thought.findOneAndDelete(
                {_id: req.params.thoughtId},
                )
                res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    addReaction: async (req, res) => {
        try {
            const results = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId}, // changed to body instead of params while working with AskBCS
                { $addToSet: {
                    reactions: req.body // changed to body/removedId instead of params while working with AskBCS
                }},
                { new: true }
            )
            res.json(results)                
        }
        catch(err) {
            res.status(500).json(err);
        }
        
    },
    deleteReaction: async (req, res) => {
        try {
            const results = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId},
                { $pull: {
                    reactions:{
                        _id:req.params.reactionId }
                }},
                { new: true }
            )
            res.json(results)                
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = thoughtController;