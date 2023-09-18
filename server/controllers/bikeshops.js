import { pool } from "../config/database.js";

const fetchBikeShops = async (request, response) => {

    try {

        const results = await pool.query("SELECT * FROM bikeshops ORDER BY id ASC");
        response.status(200).json(results.rows);

    } catch (error) {
        response.status(409).json({ error: error.message }); 
    };

};

export default {
    fetchBikeShops, 
};