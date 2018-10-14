const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://i.imgur.com/pnMv3iK.png',
        required: true
    },
    exp: {
        type: Number,
        default: 0,
        required: true,
    },
    email: {
        type: String,
    },
    budget: {
        type: Schema.Types.ObjectId
    },
    groups: {
        type: [Schema.Types.ObjectId]
    },
    transactions: {
        type: [Schema.Types.ObjectId]
    },
    bankingCard: {
        type: Schema.Types.ObjectId
    },
    purchasedMemberShip: {
        type: [Schema.Types.ObjectId]
    }
}, {
    collection: 'Users'
})

module.exports = UserSchema;