const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

// Database Connection

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database connection successful!');
});

// Server

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running on port: ", port);
});