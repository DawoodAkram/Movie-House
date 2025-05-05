import { query } from "@/lib/db";

export default async function handle(req, res) {
    const dID = req.query.id
    if (req.method === "Get") {
        try {
            const director = await query('SELECT * FROM directors where id= $1', [dID])
            res.status(200).json(director.rows)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}