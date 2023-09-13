import express from 'express';
import bikeShopRouter from './routes/bikeshop.js';
const app = express(); 


app.use("/bikeshops", bikeShopRouter);

app.use("/", (req, res) => {
    res.status(200).send(
        `<h1 style="text-align: center; margin-top: 50px;">Bikeshop API</h1>`
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}...`);
});