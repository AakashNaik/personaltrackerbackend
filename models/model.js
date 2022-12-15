const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    topic: {
        required: true,
        type: String
    },
    input: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('task', dataSchema)