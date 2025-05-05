import { query } from "@/lib/db"

export default async function handle(req, res) {
    const genreId = req.query.id
    if (req.method === "GET") {
        try {
            const result = await query('SELECT name FROM genres WHERE id = $1', [genreId])
            if (result.rows.length === 0) {
                res.status(404).json({ error: "Genre not found" });
            } else {
                res.status(200).json(result.rows[0]);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}