import { pool } from '../db.js';

export const getRoles = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM roles')
    res.json(rows);
}

export const getRolId = async (req, res) => {
    const { id_rol } = req.params

    const { rows } = await pool.query('SELECT * FROM roles WHERE id_rol = $1', [id_rol])

    if (rows.length === 0)
        return res.status(404).json({ message: 'Rol no encontrado' })

    res.json(rows[0])
}

export const crearRol = async (req, res) => {
    const data = req.body
    const { rows } = await pool.query('INSERT INTO roles (id_rol, nombre_rol) VALUES ($1, $2) RETURNING *',
        [data.id_rol, data.nombre_rol])

    return res.json(rows[0])
}

export const deleteRol = async (req, res) => {
    const { id_rol } = req.params;
    const { rowsCount } = await pool.query(
        'DELETE FROM roles WHERE id_rol = $1 RETURNING *',
        [id_rol]
    );

    if (rowsCount === 0) {
        return res.status(404).json({ message: 'Rol no encontrado' });
    }

    return res.sendStatus(204)
}