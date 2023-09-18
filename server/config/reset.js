import { pool } from "../config/database.js"; 
import "./dotenv.js"; 
import bikeShopsData from "../data/bikeShops.js";

const createBikeShopsTable = async () => {

    const createTableQuery = `

        DROP TABLE IF EXISTS bikeShops;

        CREATE TABLE IF NOT EXISTS bikeshops (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        missionStatement TEXT NOT NULL,
        logo TEXT NOT NULL,
        website TEXT NOT NULL,
        bikes TEXT NOT NULL
    )`;
    try {
        const response = await pool.query(createTableQuery);
        console.log("👉 response:", response);
    } catch (error) {
        console.log("error in createTableQuery: ", error);
        pool.end();
    };
};

const seedBikeShopsTable = async () => {

    await createBikeShopsTable(); 

    bikeShopsData.forEach((bikeshop) => {

        const insertQuery = {
            text: `INSERT INTO bikeshops (name, missionStatement, logo, website, bikes) VALUES ($1, $2, $3, $4, $5)`,
        };

        const values = [
            bikeshop.name,
            bikeshop.missionStatement,
            bikeshop.logo,
            bikeshop.website,
            bikeshop.bikes,
        ];

        pool.query(insertQuery, values, (error, response) => {

            if (error) {
                console.log("error in insertQuery: ", error);
                return;
            } else {
                console.log(`✅ ${bikeshop.name} added successfully`); 
            }
        });
    });
};

seedBikeShopsTable(); 