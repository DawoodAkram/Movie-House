import { query } from "@/lib/db";

export default async function handle(req, res) {
    if (req.method === "GET") {
        try {
            const directors = await query('SELECT * FROM directors')
            res.status(200).json(directors.rows);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}