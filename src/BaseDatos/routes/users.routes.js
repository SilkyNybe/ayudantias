import {Router} from 'express';
import  {pool} from '../db.js';
import {crearUsuario, deleteUsuario, getUsuarioId, getUsuarios, updateUsuario, loginUsuario} from '../controllers/users.controllers.js';
const router = Router();

//OBTENER TODOS LOS USUARIOS
router.get('/usuarios', getUsuarios);

//OBTENER UN USUARIO POR ID
router.get('/usuarios/:id_usu', getUsuarioId);

//CREAR UN USUARIO
router.post('/usuarios', crearUsuario);

//ELIMINAR UN USUARIO
router.delete('/usuarios/:id_usu', deleteUsuario);

//EDITAR UN USUARIO
router.put('/usuarios/:id_usu', updateUsuario);


//LOGIN DE USUARIO

router.post('/login', loginUsuario);


export default router;