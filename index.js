const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

dbConnection()

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})