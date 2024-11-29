const express = require('express')
const router = express.Router()
const ReminderController = require('../controllers/Reminder.controller')
const verifyToken = require('../middleware/auth');

router.post("/reminders", verifyToken, ReminderController.createNew); // Crear recordatorio
router.get("/reminders", verifyToken, ReminderController.getAll); // Obtener todos los recordatorios
router.get("/reminders/:_id", verifyToken, ReminderController.getID); // Obtener recordatorio por ID
router.put("/reminders/:_id", verifyToken, ReminderController.updateID); // Actualizar recordatorio
router.delete("/reminders/:_id", verifyToken, ReminderController.deleteID); // Eliminar recordatorio

module.exports = router