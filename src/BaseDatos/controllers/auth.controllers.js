// controllers/auth.controllers.js
import { pool } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Llave secreta para JWT (mantenla en variable de entorno en producción)
const JWT_SECRET = process.env.JWT_SECRET || 'mi_clave_secreta';

export const register = async (req, res) => {
  try {
    const { nombre_usu, apellido_usu, correo_usu, telefono, contrasena } = req.body;

    // 1. Validar que no falten campos
    if (!nombre_usu || !apellido_usu || !correo_usu || !telefono || !contrasena) {
      return res.status(400).json({ message: 'Faltan datos obligatorios.' });
    }

    // 2. Comprobar si el correo ya existe
    const { rows: existing } = await pool.query(
      'SELECT * FROM usuario WHERE correo_usu = $1',
      [correo_usu]
    );
    if (existing.length) {
      return res.status(409).json({ message: 'El correo ya está en uso.' });
    }

    // 3. Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    // 4. Insertar en BD (asignamos un rol por defecto, ej. id_rol = 2)
    const id_rol_por_defecto = 2;
    const insertQuery = `
      INSERT INTO usuario (nombre_usu, apellido_usu, correo_usu, telefono, contrasena, id_rol)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id_usu, nombre_usu, apellido_usu, correo_usu, telefono, id_rol
    `;
    const { rows } = await pool.query(insertQuery, [
      nombre_usu,
      apellido_usu,
      correo_usu,
      telefono,
      hashedPassword,
      id_rol_por_defecto,
    ]);

    // 5. Devolver datos básicos (sin contraseña)
    return res.status(201).json(rows[0]);

  } catch (error) {
    console.error('Error en register:', error);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
};

export const login = async (req, res) => {
  try {
    const { correo_usu, contrasena } = req.body;
    if (!correo_usu || !contrasena) {
      return res.status(400).json({ message: 'Correo y contraseña son obligatorios.' });
    }

    // 1. Buscar usuario por correo
    const { rows } = await pool.query(
      'SELECT * FROM usuario WHERE correo_usu = $1',
      [correo_usu]
    );
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }
    const usuario = rows[0];

    // 2. Comparar contraseñas
    const match = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!match) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // 3. Generar un JWT con la información mínima
    const payload = {
      id_usu: usuario.id_usu,
      nombre_usu: usuario.nombre_usu,
      correo_usu: usuario.correo_usu,
      id_rol: usuario.id_rol
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });

    // 4. Devolver token
    return res.json({ token, usuario: payload });

  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
};
