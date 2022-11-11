const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: [ /.+@.+\..+/, 'Does not match email on file.']
    }, 
    thoughts: [{
        ref: 'Thought',
        type: Schema.Types.ObjectId
    }],
    friends: [{
        ref: 'User',
        type: Schema.Types.ObjectId
    }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('User', userSchema);

module.exports = User; 