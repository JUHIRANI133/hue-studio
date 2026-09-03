const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        default: 'Untitled Project'
    },
    originalImage: {
        type: String,
        required: true
    },
    processedImage: {
        type: String
    },
    wallSelections: [{
        coordinates: [[Number]],  // Array of [x,y] points
        colorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Color'
        },
        patternId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pattern'
        },
        opacity: {
            type: Number,
            default: 0.8,
            min: 0,
            max: 1
        }
    }],
    isSaved: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);