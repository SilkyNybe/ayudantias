import { pool } from '../db.js';

export const getComentarios = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM comentario_ayudantias')
    res.json(rows);
}

export const getComentarioId = async (req, res) => {
    const { id_com } = req.params

    const { rows } = await pool.query('SELECT * FROM comentario_ayudantias WHERE id_com = $1', [id_com])

    if (rows.length === 0)
        return res.status(404).json({ message: 'Comentario no encontrado' })

    res.json(rows[0])
}

export const crearComentario = async (req, res) => {
    const data = req.body
    const { rows } = await pool.query('INSERT INTO comentario_ayudantias (id_com, id_ay, id_usu, comentario, fecha_com) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [data.id_com, data.id_ay, data.id_usu, data.comentario, data.fecha_com])

    return res.json(rows[0])
}

export const deleteComentario = async (req, res) => {
    const { id_com } = req.params;
    const { rowsCount } = await pool.query(
        'DELETE FROM comentario_ayudantias WHERE id_com = $1 RETURNING *',
        [id_com]
    );

    if (rowsCount === 0) {
        return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    return res.sendStatus(204)
}