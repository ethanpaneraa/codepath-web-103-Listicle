import express from "express"; 
import path from "path"; 
import { fileURLToPath } from "url";
import bikeShopData from "../data/data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json(bikeShopData);
}); 

router.get("/:bikeshopId", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "../public/bikeshop.html"));
});

export default router; 