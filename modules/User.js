const mongoose = require('mongoose');

const UserSchema = new moongoose.Schema({
    name: {
        type: String,
        required: True
    },
    email: {
        type: String,
        required: True
    },
    password: {
        type: String,
        required: True
    },
    date: {
        type: Date,
        default: Data.now
    }
});

const User = mongoose.model('User', UserSchema)

module.export = User;