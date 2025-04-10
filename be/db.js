const { Client } = require('pg');
const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDB, client };
