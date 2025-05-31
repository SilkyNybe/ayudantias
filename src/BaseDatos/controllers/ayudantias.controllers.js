import { pool } from '../db.js';

export const getAyudantias = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM ayudantias');
  res.json(rows);
};

export const getAyudantiaId = async (req, res) => {
  const { id_ayu } = req.params;
  const { rows } = await pool.query('SELECT * FROM ayudantias WHERE id_ayu = $1', [id_ayu]);
  if (rows.length === 0) return res.status(404).json({ message: 'No encontrada' });
  res.json(rows[0]);
};

export const crearAyudantia = async (req, res) => {
  const data = req.body;
  const { rows } = await pool.query(
    'INSERT INTO ayudantias (titulo, descripcion, fecha, id_usu) VALUES ($1, $2, $3, $4) RETURNING *',
    [data.titulo, data.descripcion, data.fecha, data.id_usu]
  );
  res.json(rows[0]);
};

export const updateAyudantia = async (req, res) => {
  const { id_ayu } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    'UPDATE ayudantias SET titulo = $1, descripcion = $2, fecha = $3, id_usu = $4 WHERE id_ayu = $5 RETURNING *',
    [data.titulo, data.descripcion, data.fecha, data.id_usu, id_ayu]
  );
  res.json(rows[0]);
};

export const deleteAyudantia = async (req, res) => {
  const { id_ayu } = req.params;
  const { rowCount } = await pool.query('DELETE FROM ayudantias WHERE id_ayu = $1', [id_ayu]);
  if (rowCount === 0) return res.status(404).json({ message: 'No encontrada' });
  res.sendStatus(204);
};
