import { pool } from '../db.js';

export const getUsuarios = async (req, res) => {
   const {rows} = await pool.query('SELECT * FROM usuario')
    res.json(rows);
}

export const getUsuarioId = async (req, res) => {
    const {id_usu} = req.params

    const {rows} = await pool.query('SELECT * FROM usuario WHERE id_usu = $1', [id_usu])
    
    if (rows.length === 0)
         return res.status(404).json({message: 'Usuario no encontrado'})
    
    res.json(rows[0])
}

export const crearUsuario = async(req, res) => {
    const data = req.body
    const {rows} = await pool.query('INSERT INTO usuario (id_usu, nombre_usu, apellido_usu, correo_usu, telefono, contrasena, id_rol) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
         [data.id_usu, data.nombre_usu, data.apellido_usu, data.correo_usu, data.telefono, data.contrasena, data.id_rol])

    return res.json(rows[0])
}

export const deleteUsuario = async (req, res) => {
    const {id_usu} = req.params;
    const {rowsCount} = await pool.query(
        'DELETE FROM usuario WHERE id_usu = $1 RETURNING *',
        [id_usu]
    );

    if (rowsCount === 0){
         return res.status(404).json({message: 'Usuario no encontrado'});
    }

    return res.sendStatus(204)
}

export const updateUsuario =async (req, res) => {
    const {id_usu} = req.params
    const data = req.body;

    const {rows} = await pool.query('UPDATE usuario SET nombre_usu = $1, apellido_usu = $2, correo_usu = $3, telefono = $4, contrasena = $5, id_rol = $6 WHERE id_usu = $7 RETURNING *',
        [data.nombre_usu, data.apellido_usu, data.correo_usu, data.telefono, data.contrasena, data.id_rol, id_usu]
    );
    return res.json(rows[0])

}