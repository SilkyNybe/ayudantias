import { pool } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Lee desde tus variables de entorno o pon aquí tu secreto
const JWT_SECRET = process.env.JWT_SECRET || 'TU_SECRETO_AQUI';
const JWT_EXPIRES_IN = '8h'; // por ejemplo, 8 horas

// --- Controlador para login ---
export const loginUsuario = async (req, res) => {
  try {
    const { correo_usu, contrasena } = req.body;

    if (!correo_usu || !contrasena) {
      return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
    }

    // 1) Buscar al usuario (uniendo con la tabla de rol para obtener nombre_rol)
    const queryTexto = `
      SELECT u.id_usu,
             u.nombre_usu,
             u.apellido_usu,
             u.correo_usu,
             u.telefono,
             u.contrasena AS hash_contrasena,
             r.id_rol,
             r.nombre_rol
      FROM usuario u
      JOIN roles r ON u.id_rol = r.id_rol
      WHERE u.correo_usu = $1
      LIMIT 1;
    `;
    const { rows } = await pool.query(queryTexto, [correo_usu]);

    if (rows.length === 0) {
      // No existe un usuario con ese correo
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const usuario = rows[0];

    // 2) Comparar la contraseña enviada (plain-text) con el hash almacenado
    const validPassword = await bcrypt.compare(contrasena, usuario.hash_contrasena);
    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // 3) Generar el payload para el JWT (puedes incluir lo que necesites)
    const payload = {
      id_usu: usuario.id_usu,
      nombre_usu: usuario.nombre_usu,
      apellido_usu: usuario.apellido_usu,
      correo_usu: usuario.correo_usu,
      id_rol: usuario.id_rol,
      nombre_rol: usuario.nombre_rol
    };

    // 4) Firmar el token
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // 5) Devolver token y datos mínimos
    return res.json({
      message: 'Autenticación exitosa',
      token,
      user: {
        id_usu: usuario.id_usu,
        nombre_usu: usuario.nombre_usu,
        apellido_usu: usuario.apellido_usu,
        correo_usu: usuario.correo_usu,
        id_rol: usuario.id_rol,
        nombre_rol: usuario.nombre_rol
      }
    });
  } catch (error) {
    console.error('Error en loginUsuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// --- (el resto de controladores que ya tenías) ---
export const getUsuarios = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM usuario');
  res.json(rows);
};

export const getUsuarioId = async (req, res) => {
  const { id_usu } = req.params;
  const { rows } = await pool.query('SELECT * FROM usuario WHERE id_usu = $1', [id_usu]);
  if (rows.length === 0)
    return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(rows[0]);
};

export const crearUsuario = async (req, res) => {
  try {
    const data = req.body;
    // 1) Antes de insertar, hashea la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.contrasena, saltRounds);

    const { rows } = await pool.query(
      `
      INSERT INTO usuario 
        (nombre_usu, apellido_usu, correo_usu, telefono, contrasena, id_rol)
      VALUES 
        ($1, $2, $3, $4, $5, $6)
      RETURNING id_usu, nombre_usu, apellido_usu, correo_usu, telefono, id_rol;
      `,
      [
        data.nombre_usu,
        data.apellido_usu,
        data.correo_usu,
        data.telefono,
        hashedPassword,
        data.id_rol
      ]
    );

    return res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error en crearUsuario:', error);
    return res.status(500).json({ message: 'Error interno al crear usuario' });
  }
};

export const deleteUsuario = async (req, res) => {
  const { id_usu } = req.params;
  const { rowCount } = await pool.query(
    'DELETE FROM usuario WHERE id_usu = $1 RETURNING *',
    [id_usu]
  );
  if (rowCount === 0) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  return res.sendStatus(204);
};

export const updateUsuario = async (req, res) => {
  const { id_usu } = req.params;
  const data = req.body;

  // Si desean permitir cambiar contraseña, habría que hacer hashing aquí también.
  // Por simplicidad, este ejemplo asume que no se actualiza la contraseña desde aquí.

  const { rows } = await pool.query(
    `
    UPDATE usuario 
    SET nombre_usu = $1,
        apellido_usu = $2,
        correo_usu = $3,
        telefono = $4,
        id_rol = $5
    WHERE id_usu = $6
    RETURNING id_usu, nombre_usu, apellido_usu, correo_usu, telefono, id_rol;
    `,
    [
      data.nombre_usu,
      data.apellido_usu,
      data.correo_usu,
      data.telefono,
      data.id_rol,
      id_usu
    ]
  );
  return res.json(rows[0]);
};
