const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    goal: {
        type: Number
    },
    users: {
        type: [Schema.Types.ObjectId]
    },
    budget: {
        type: Schema.Types.ObjectId
    }
}, {
    collection: 'Groups'
});

module.exports = GroupSchema;