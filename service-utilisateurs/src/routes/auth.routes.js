const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// 🔐 Route protégée : Profil utilisateur
router.get('/profil', authMiddleware, async (req, res) => {
  try {
    // Tu peux ici renvoyer plus d'infos si besoin
    res.status(200).json({ message: 'Voici votre profil', userId: req.userId });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du profil', error: error.message });
  }
});

// 📝 Inscription
router.post('/register', authController.register);

// 🔓 Connexion
router.post('/login', authController.login);

module.exports = router;
