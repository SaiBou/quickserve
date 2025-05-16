const express = require('express');
const dotenv = require('dotenv');
const produitsRoutes = require('./routes/produits.routes');
const db = require('./config/db');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/produits', produitsRoutes);

app.listen(PORT, () => {
  console.log(`Service produits lancé sur le port ${PORT}`);
});
