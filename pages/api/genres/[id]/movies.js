import { query } from "@/lib/db";

export default async function handle(req, res) {
    const id = req.query.id
    if (req.method === "GET") {
        try {
            const moviesRes = await query('SELECT * from movies WHERE genre_id = $1', [id])
            if (moviesRes.rows.length === 0) {
                res.status(404).json({ error: "Movie not found" });
            } else {
                res.status(200).json(moviesRes.rows);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}