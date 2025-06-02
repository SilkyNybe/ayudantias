import { Router } from 'express';
import { crearRol, deleteRol, getRoles, getRolId } from '../controllers/roles.controllers.js';

const router = Router();

//OBTENER TODOS LOS ROLES
router.get('/roles', getRoles);

//OBTENER UN ROL POR ID
router.get('/roles/:id_rol', getRolId);

//CREAR UN ROL
router.post('/roles', crearRol);

//ELIMINAR UN ROL
router.delete('/roles/:id_rol', deleteRol);


export default router;