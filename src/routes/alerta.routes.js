// geolocalizacionRoutes.js
import express from 'express';
import { obtenerCoordenadas } from '../controllers/geolocalizacionController.js';

const router = express.Router();

router.post('/coordenadas', obtenerCoordenadas);

export default router;
