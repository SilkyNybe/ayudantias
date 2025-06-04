// routes/auth.routes.js
import { Router } from 'express';
import { register, login } from '../controllers/auth.controllers.js';

const router = Router();

// Ruta para registro
router.post('/registro', register);

// Ruta para login
router.post('/login', login);

export default router;
