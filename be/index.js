const express = require('express');
require('dotenv');
const { connectDB, client } = require('./db');
const app = express();
connectDB();

app.get('/data', async (req, res) => {
    const result = await client.query('select * from k8s');
    // result.rows[0].name
    res.json(result.rows[0].name);
});

app.listen(3000, () => {
    console.log('app listen on port 3000');
});
