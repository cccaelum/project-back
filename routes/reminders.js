const express = require('express')
const router = express.Router()
// const Reminder = require('../models/Reminder')
const ReminderController = require('../controllers/Reminder.controller')

router.post("/reminders", ReminderController.createNew)
router.get('/', ReminderController.getAll)
router.get('/reminders/:_id', ReminderController.getID)
router.put('/reminders/:_id', ReminderController.updateID)
router.delete('/reminders/:_id', ReminderController.deleteID)

module.exports = router