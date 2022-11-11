const User = require('../models/User');

const userController = {
     getAllUsers: async ( req, res ) =>  {
        try {
            const results = await User.find()
            return res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    getSingleUser: async ( req, res ) => {
        try {
            const results = await User.findOne({
                _id: req.params.userId })
                .populate('friends')
                .populate('thoughts')
           return res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    postNewUser: async (req, res) => {
        try {
            const results = await User.create(req.body)
            return res.json(results)                
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    updateUser: async (req, res) => {
        try {
            const results = await User.findOneAndUpdate( 
                { _id: req.params.userId},
                { $set: req.body},
                { runValidators: true, new: true}
            ) 
          return res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const results = await User.findOneAndDelete(
                {_id: req.params.userId},
                )
            res.json(results)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    addFriend: async (req, res) => {
        try {
            const results = await User.findOneAndUpdate(
                { _id: req.params.userId},
                { $addToSet: {
                    friends: req.params.friendId
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

module.exports = userController;