// denunciaAnonima.routes.js

import { Router } from 'express';
import { enviarDenunciaAnonima } from '../controllers/denunciaAnonima.controller.js';

const router = Router();

router.post('/enviar-denuncia-anonima', enviarDenunciaAnonima);

export default router;
