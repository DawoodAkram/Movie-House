import { query } from "../../../lib/db.js";

export default async function handler(req, res) {

    if (req.method === "GET") {
        const id = req.query.id
        try {
            const result = await query(
                'SELECT * FROM movies WHERE id = $1',
                [id]
            );

            console.log(result);

            if (result.rows.length === 0) {
                res.status(404).json({ error: "Movie not found" });
            } else {
                res.status(200).json(result.rows[0]);  // Return the movie details
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

