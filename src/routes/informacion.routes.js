const express = require('express');
const router = express.Router();
const denunciaController = require('./controllers/denunciaController');

// Ruta para enviar una denuncia anónima
router.post('/api/denuncias', denunciaController.enviarDenunciaAnonima);

module.exports = router;
