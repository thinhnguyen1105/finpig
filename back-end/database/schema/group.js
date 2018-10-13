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
        type: Number,
        required: true
    },
    managerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userIds: {
        type: [Schema.Types.ObjectId]
    },
    budget: {
        type: Schema.Types.ObjectId
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
}, {
    collection: 'Groups'
});

module.exports = GroupSchema;