import { Router } from 'express';
import { crearAsignatura, deleteAsignatura, getAsignaturaId, getAsignaturas } from '../controllers/asignaturas.controllers.js';
const router = Router();

//OBTENER TODOS LAS ASIGNATURAS
router.get('/asignaturas', getAsignaturas);

//OBTENER UN ASIGNATURA POR ID
router.get('/asignaturas/:id_asig', getAsignaturaId);

//CREAR UN ASIGNATURA
router.post('/asignaturas', crearAsignatura);

//ELIMINAR UN ASIGNATURA
router.delete('/asignaturas/:id_asig', deleteAsignatura);


export default router;