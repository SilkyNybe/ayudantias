import { pool } from '../db.js';

export const getAsignaturas = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM asignatura')
    res.json(rows);
}

export const getAsignaturaId = async (req, res) => {
    const { id_asig } = req.params

    const { rows } = await pool.query('SELECT * FROM asignatura WHERE id_asig = $1', [id_asig])

    if (rows.length === 0)
        return res.status(404).json({ message: 'Asignatura no encontrada' })

    res.json(rows[0])
}

export const crearAsignatura = async (req, res) => {
    const data = req.body
    const { rows } = await pool.query('INSERT INTO asignatura (id_asig, nom_asig) VALUES ($1, $2) RETURNING *',
        [data.id_asig, data.nom_asig])

    return res.json(rows[0])
}

export const deleteAsignatura = async (req, res) => {
    const { id_asig } = req.params;
    const { rowsCount } = await pool.query(
        'DELETE FROM asignatura WHERE id_asig = $1 RETURNING *',
        [id_asig]
    );

    if (rowsCount === 0) {
        return res.status(404).json({ message: 'Asignatura no encontrada' });
    }

    return res.sendStatus(204)
}