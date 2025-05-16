const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 🔒 Vérifie la présence du header Authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant ou mal formaté' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // 🔍 Vérifie et décode le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 📎 Attache l’ID utilisateur à la requête pour la suite
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error('Erreur de vérification du token :', error.message);
    return res.status(403).json({ message: 'Token invalide ou expiré' });
  }
};

module.exports = authMiddleware;
