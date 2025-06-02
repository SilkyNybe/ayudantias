import { pool } from '../db.js';

export const getSalas = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM sala')
    res.json(rows);
}

export const getSalaId = async (req, res) => {
    const { id_sala } = req.params

    const { rows } = await pool.query('SELECT * FROM sala WHERE id_sala = $1', [id_sala])

    if (rows.length === 0)
        return res.status(404).json({ message: 'Sala no encontrada' })

    res.json(rows[0])
}

export const crearSala = async (req, res) => {
    const data = req.body
    const { rows } = await pool.query('INSERT INTO sala (id_sala, nom_sala) VALUES ($1, $2) RETURNING *',
        [data.id_sala, data.nom_sala])

    return res.json(rows[0])
}

export const deleteSala = async (req, res) => {
    const { id_sala } = req.params;
    const { rowsCount } = await pool.query(
        'DELETE FROM sala WHERE id_sala = $1 RETURNING *',
        [id_sala]
    );

    if (rowsCount === 0) {
        return res.status(404).json({ message: 'Sala no encontrada' });
    }

    return res.sendStatus(204)
}