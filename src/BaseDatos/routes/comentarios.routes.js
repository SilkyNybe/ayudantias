import { Router } from 'express';
import { crearComentario, deleteComentario, getComentarioId, getComentarios } from '../controllers/comentarios.controllers.js';
const router = Router();

//OBTENER TODOS LOS COMENTARIOS
router.get('/comentarios', getComentarios);

//OBTENER UN COMENTARIO POR ID
router.get('/comentarios/:id_com', getComentarioId);

//CREAR UN COMENTARIO
router.post('/comentarios', crearComentario);

//ELIMINAR UN COMENTARIO
router.delete('/comentarios/:id_com', deleteComentario);


export default router;