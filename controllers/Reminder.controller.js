const Reminder = require('../models/Reminder')

const ReminderController = {
    async createNew (req, res) {
        try {
            const reminder = await Reminder.create({...req.body, completed: false})
            res.status(201).send(reminder)
        } catch (error) {
            console.log(error)
        }
    },
    async getAll (req, res) {
        try {
            const reminder = await Reminder.find();
            res.json(reminder);
        } catch (error) {
            console.log(error)
        }
    },
    async getID (req, res) {
        try {
            const id = req.params._id;
            const reminder = await Reminder.findById(id);
            res.json(reminder)
        } catch (error) {
            console.log(error)
        }
    },
    async updateID (req, res) {
        try {
            const { title, description, priority, tag, date, url } = req.body;
            const updatedReminder = await Reminder.findByIdAndUpdate(req.params._id, {
                title,
                description,
                priority,
                tag,
                date,
                url
            }, { new: true });

            if (!updatedReminder) {
                return res.status(404).json({ message: 'Reminder not found' });
            }

            res.status(200).json(updatedReminder);

        } catch (error) {
            console.log(error)
        }
    },
    async deleteID (req, res) {
        try {
            const id = req.params._id;
            const deletedReminder = await Reminder.findByIdAndDelete(id)
            if (!deletedReminder) {
                return res.status(404).json({message: "Reminder not found"})
            }
            res.json({message: "Reminder deleted successfully", deletedReminder})
        } catch (error) {
            console.log(error)
        } 
    }

}

module.exports = ReminderController