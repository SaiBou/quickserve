const db = require('./config/db'); // en haut du fichier
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173", // Pas d’astérisque ici
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



// Import des routes
const authRoutes = require('./routes/auth.routes');
app.use('/api/utilisateurs', authRoutes);

app.get('/', (req, res) => {
  res.send('Service utilisateurs opérationnel');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Service utilisateurs lancé sur le port ${PORT}`);
});
