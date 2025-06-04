import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import { PORT } from './src/BaseDatos/config.js'

// Importar las rutas de los controladores
import userRoutes from './src/BaseDatos/routes/users.routes.js';
import comentariosRoutes from './src/BaseDatos/routes/comentarios.routes.js';
import notificacionesRoutes from './src/BaseDatos/routes/notificaciones.routes.js';
import ayudantiasRoutes from './src/BaseDatos/routes/ayudantias.routes.js';
import asignaturasRoutes from './src/BaseDatos/routes/asignaturas.routes.js';
import rolesRoutes from './src/BaseDatos/routes/roles.routes.js';
import salaRoutes from './src/BaseDatos/routes/salas.routes.js';
import propuestasRoutes from './src/BaseDatos/routes/propuestasayudantias.routes.js';
import authRouter  from './src/BaseDatos/routes/auth.routes.js';

import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors());
app.use('/api',userRoutes);
app.use('/api', comentariosRoutes);
app.use('/api', notificacionesRoutes);
app.use('/api', ayudantiasRoutes);
app.use('/api', asignaturasRoutes);
app.use('/api', rolesRoutes);
app.use('/api', salaRoutes);
app.use('/api', propuestasRoutes);

// Rutas de autenticación
app.use('/api', authRouter);

app.listen(PORT)
console.log('Server ejecutandose en el puerto', PORT);