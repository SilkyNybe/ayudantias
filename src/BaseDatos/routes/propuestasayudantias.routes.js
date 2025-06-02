import { Router } from 'express';
import { crearPropuesta, deletePropuesta, getPropuestaId, getPropuestas } from '../controllers/propuestasayudantias.controllers.js';

const router = Router();

//OBTENER TODAS LAS SALAS
router.get('/propuestas', getPropuestas);

//OBTENER UNA SALA POR ID
router.get('/propuestas/:id_prop', getPropuestaId);

//CREAR UNA SALA
router.post('/propuestas', crearPropuesta);

//ELIMINAR UNA SALA
router.delete('/propuestas/:id_prop', deletePropuesta);


export default router;