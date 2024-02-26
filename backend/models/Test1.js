const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please enter Program name'],
        trim: true,
        maxLength: [100, 'Program name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter Program description'],
    },
    images: { // Assuming each program has one image
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Program', testSchema);