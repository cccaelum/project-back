const express = require('express')
const dbConnection = require('./config/config')
const app = express()
const dotenv = require('dotenv'); 
dotenv.config();
const cors = require('cors');
const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000
const routes = require('./routes/reminders');

dbConnection()

// Importar las rutas
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

// Usar las rutas
app.use('/', routes);
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})