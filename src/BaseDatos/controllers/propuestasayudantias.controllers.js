import { pool } from '../db.js';

export const getPropuestas = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM propuesta_ayudantias');
    res.json(rows);
}

export const getPropuestaId = async (req, res) => {
    const { id_prop } = req.params

    const { rows } = await pool.query('SELECT * FROM propuesta_ayudantias WHERE id_prop = $1', [id_prop])

    if (rows.length === 0)
        return res.status(404).json({ message: 'Propuesta no encontrada' })

    res.json(rows[0])
}

export const crearPropuesta = async (req, res) => {
    const data = req.body
    const { rows } = await pool.query('INSERT INTO propuesta_ayudantias (id_prop, id_usu, nombre_prop, descripcion_prop, estado, votos) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [data.id_prop, data.id_usu, data.nombre_prop, data.descripcion_prop, data.estado, data.votos]);

    return res.json(rows[0])
}

export const deletePropuesta = async (req, res) => {
    const { id_prop } = req.params;
    const { rowsCount } = await pool.query(
        'DELETE FROM propuesta_ayudantias WHERE id_prop = $1 RETURNING *',
        [id_prop]
    );

    if (rowsCount === 0) {
        return res.status(404).json({ message: 'Propuesta no encontrada' });
    }

    return res.sendStatus(204)
}