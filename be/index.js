const express = require('express');
require('dotenv');

const app = express();

app.get('/api', (req, res) => {
    res.json(process.env.TOKEN);
});

app.listen(3000, () => {
    console.log('app listen on port 3000');
});
