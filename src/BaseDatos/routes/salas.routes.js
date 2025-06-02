import { Router } from 'express';
import { crearSala, deleteSala, getSalaId, getSalas } from '../controllers/salas.controllers.js';
const router = Router();

//OBTENER TODAS LAS SALAS
router.get('/salas', getSalas);

//OBTENER UNA SALA POR ID
router.get('/salas/:id_sala', getSalaId);

//CREAR UNA SALA
router.post('/salas', crearSala);

//ELIMINAR UNA SALA
router.delete('/salas/:id_sala', deleteSala);


export default router;