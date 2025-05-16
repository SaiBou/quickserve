const express = require('express');
const router = express.Router();
const { getProduits } = require('../controllers/produits.controller');

router.get('/', getProduits);

module.exports = router;
