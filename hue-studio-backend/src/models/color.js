const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    hexCode: {
        type: String,
        required: true,
        uppercase: true,
        match: /^#[0-9A-F]{6}$/  // Validates hex color format
    },
    brand: {
        type: String,
        trim: true
    },
    finish: {
        type: String,
        enum: ['matte', 'glossy', 'satin', 'eggshell', 'semi-gloss'],
        default: 'matte'
    },
    category: {
        type: String,
        enum: ['living', 'bedroom', 'kitchen', 'bathroom', 'exterior', 'accent'],
        default: 'living'
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Color', ColorSchema);