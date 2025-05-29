import {Router} from 'express';
import {crearNotificacion, getNotificaciones, getNotificacionId, deleteNotificacion} from '../controllers/notificaciones.controllers.js';
const router = Router();

//OBTENER TODOS LAS NOTIFICACIONES
router.get('/notificaciones', getNotificaciones);

//OBTENER UNA NOTIFICACION POR ID
router.get('/notificaciones/:id_not', getNotificacionId);

//CREAR UNA NOTIFICACION
router.post('/notificaciones', crearNotificacion);

//ELIMINAR UNA NOTIFICACION
router.delete('/notificaciones/:id_not', deleteNotificacion);


export default router;