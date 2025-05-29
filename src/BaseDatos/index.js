import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import { PORT } from './config.js'
import userRoutes from './routes/users.routes.js';
import comentariosRoutes from './routes/comentarios.routes.js';
import notificacionesRoutes from './routes/notificaciones.routes.js';
import morgan from 'morgan';

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(userRoutes);
app.use(comentariosRoutes);
app.use(notificacionesRoutes);

app.listen(PORT)
console.log('Server ejecutandose en el puerto', PORT);