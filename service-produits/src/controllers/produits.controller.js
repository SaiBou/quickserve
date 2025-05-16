const pool = require('../config/db');

exports.getProduits = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produits');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};
