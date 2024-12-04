const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: null },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        required: false
    },
    tag: {
        type: String,
        enum: ['work', 'personal'],  
        required: true
    },
    date: Date,
    url: { type: String, default: null },
    completed: Boolean,
    userId: { type: String, ref: 'User', required: false },
}, { timestamps: true });

const Reminder = mongoose.model('Reminder', ReminderSchema);

module.exports = Reminder;