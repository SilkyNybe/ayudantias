import { pool } from '../db.js';

export const getNotificaciones = async (req, res) => {
   const {rows} = await pool.query('SELECT * FROM notificaciones')
    res.json(rows);
}

export const getNotificacionId = async (req, res) => {
    const {id_not} = req.params

    const {rows} = await pool.query('SELECT * FROM notificaciones WHERE id_not = $1', [id_not])
    
    if (rows.length === 0)
         return res.status(404).json({message: 'Notificacion no encontrada'})
    
    res.json(rows[0])
}

export const crearNotificacion = async(req, res) => {
    const data = req.body
    const {rows} = await pool.query('INSERT INTO notificaciones (id_not, id_usu, mensaje, tipo, fecha_envio) VALUES ($1, $2, $3, $4, $5) RETURNING *',
         [data.id_not, data.id_usu, data.mensaje, data.tipo, data.fecha_envio])

    return res.json(rows[0])
}

export const deleteNotificacion = async (req, res) => {
    const {id_not} = req.params;
    const {rowsCount} = await pool.query(
        'DELETE FROM notificaciones WHERE id_not = $1 RETURNING *',
        [id_not]
    );

    if (rowsCount === 0){
         return res.status(404).json({message: 'Notificacion no encontrada'});
    }

    return res.sendStatus(204)
}