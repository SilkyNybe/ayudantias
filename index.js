import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import { PORT } from './src/BaseDatos/config.js'
import userRoutes from './src/BaseDatos/routes/users.routes.js';
import comentariosRoutes from './src/BaseDatos/routes/comentarios.routes.js';
import notificacionesRoutes from './src/BaseDatos/routes/notificaciones.routes.js';
import ayudantiasRoutes from './src/BaseDatos/routes/ayudantias.routes.js';

import morgan from 'morgan';
import cors from 'cors';

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors());
app.use('/api',userRoutes);
app.use('/api', comentariosRoutes);
app.use('/api', notificacionesRoutes);
app.use('/api', ayudantiasRoutes);

app.listen(PORT)
console.log('Server ejecutandose en el puerto', PORT);