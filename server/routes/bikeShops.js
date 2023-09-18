import express from "express";
import path from "path";
import { fileURLToPath } from "url"; 
import bikeShopsController from "../controllers/bikeShops.js";
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const router = express.Router();

router.get("/", bikeShopsController.fetchBikeShops); 

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
  })

export default router; 