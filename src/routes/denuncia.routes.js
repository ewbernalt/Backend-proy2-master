// chatbot.routes.js

import { Router } from 'express';
import { iniciarConversacion, procesarRespuesta } from '../controllers/chatbot.controller.js';

const router = Router();

router.get('/iniciar-conversacion', iniciarConversacion);
router.post('/procesar-respuesta', procesarRespuesta);

export default router;
