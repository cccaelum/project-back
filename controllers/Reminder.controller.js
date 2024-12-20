const Reminder = require('../models/Reminder')

const ReminderController = {
    async createNew (req, res) {
        try {
            console.log("Received body:", req.body); 
            console.log("User ID (UID):", req.uid); 

            const reminder = await Reminder.create({...req.body, completed: false, userId: req.uid || null}) 
            res.status(201).send(reminder)
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating reminder");
        }
    },
    async getAll (req, res) {
        try {
            const filters = req.uid ? { userId: req.uid } : { userId: null }; 
            const reminders = await Reminder.find(filters);
            res.json(reminders);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving reminders");
        }
    },
    async getID (req, res) {
        try {
            const id = req.params._id;
            const reminder = await Reminder.findById(id);
            
            if (!reminder || (req.uid && reminder.userId && reminder.userId.toString() !== req.uid)) {
                return res.status(404).json({ message: "Reminder not found" });
            }
            res.json(reminder);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving reminder");
        }
    },
    async updateID (req, res) {
        try {
            const { title, description, priority, tag, date, url, completed } = req.body;
            const reminder = await Reminder.findById(req.params._id);

            if (!reminder || (req.uid && reminder.userId && reminder.userId.toString() !== req.uid)) {
            return res.status(404).json({ message: "Reminder not found or unauthorized" });}

            reminder.title = title || reminder.title;
            reminder.description = description !== undefined ? description : null;
            reminder.priority = priority || reminder.priority;
            reminder.tag = tag || reminder.tag;
            reminder.date = date || reminder.date;
            reminder.url = url !== undefined ? url : null;
            reminder.completed = completed ?? reminder.completed;

            const updatedReminder = await reminder.save();

            res.status(200).json(updatedReminder);

        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating reminder");
        }
    },
    async deleteID (req, res) {
        try {
        const reminder = await Reminder.findById(req.params._id);

      if (!reminder || (req.uid && reminder.userId && reminder.userId.toString() !== req.uid)) {
        return res.status(404).json({ message: "Reminder not found or unauthorized" });
      }
      await reminder.deleteOne();
      res.json({ message: "Reminder deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting reminder");
        } 
    }
}

module.exports = ReminderController