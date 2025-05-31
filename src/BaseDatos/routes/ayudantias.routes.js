import { Router } from 'express';
import {getAyudantias,getAyudantiaId,crearAyudantia,updateAyudantia,deleteAyudantia,} from '../controllers/ayudantias.controllers.js';

const router = Router();

router.get('/ayudantias', getAyudantias);

router.get('/ayudantias/:id_ayu', getAyudantiaId);

router.post('/ayudantias', crearAyudantia);

router.put('/ayudantias/:id_ayu', updateAyudantia);

router.delete('/ayudantias/:id_ayu', deleteAyudantia);

export default router;
