import { query } from "../../lib/db.js";

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const result = await query('SELECT * FROM genres');
            res.status(200).json(result.rows);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
