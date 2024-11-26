const express = require("express");
const router = express.Router();

router.post("/logout", (req, res) => {
  // En el frontend, simplemente elimina el token del localStorage
  res.status(200).send("Logged out successfully");
});

module.exports = router;