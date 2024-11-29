const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    priority: String,
    tag: String,
    date: Date,
    url: String,
    completed: Boolean,
    userId: { type: String, ref: 'User', required: false },
}, { timestamps: true });

const Reminder = mongoose.model('Reminder', ReminderSchema);

module.exports = Reminder;