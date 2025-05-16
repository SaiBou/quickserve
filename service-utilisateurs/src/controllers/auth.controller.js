const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');
require('dotenv').config();

// Connexion
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 🔍 Vérifie si l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // 🔐 Vérifie le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // 🔑 Génère un token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // ✅ Renvoie les infos utiles sans le mot de passe
    const { password: _, ...userSansMdp } = user;
    res.status(200).json({
      message: "Connexion réussie",
      email: user.email,
      nom: user.nom,
      token
    });

  } catch (error) {
    console.error('Erreur login:', error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Inscription
exports.register = async (req, res) => {
  const { email, password, nom } = req.body;

  try {
    // 🔒 Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // 📦 Création de l'utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        nom
      }
    });

    res.status(201).json({
      message: 'Utilisateur créé',
      user: {
        id: user.id,
        email: user.email,
        nom: user.nom
      }
    });

  } catch (error) {
    console.error('Erreur register:', error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};
