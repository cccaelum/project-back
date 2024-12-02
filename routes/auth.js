const express = require("express");
const router = express.Router();

router.post("/logout", (req, res) => {
  
  res.status(200).send("Logged out successfully");
});

module.exports = router;

// CREO QUE ESTO NO ES NECESARIO, DEJARLO POR SI ACASO (POR AHORA)