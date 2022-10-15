const express = require('express');
const cors = require('cors');
const dealRoutes = require('./routes/v1/deal.route');
const accountRoutes = require('./routes/v1/account.route');
const contactRoutes = require('./routes/v1/contact.route');
const leadRoutes = require('./routes/v1/lead.route');
const { connectToServer } = require('./utils/dbConnect');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Server is running");
});

app.use('/api/v1/deal', dealRoutes);
app.use('/api/v1/account', accountRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/lead', leadRoutes);

app.all('*', (req, res) => {
    res.send("No Route Fount");
})

// process.on("unhandledRejection", (error) => {
//     console.log(error.name, error.message);
//     app.close(() => {
//         process.exit(1);
//     });
// })

module.exports = app;
