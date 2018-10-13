const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
    ownerType: {
        type: String,
        enum: ['user', 'group', 'finpig'],
        required: true
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = OwnerSchema;