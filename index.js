const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/v1/user.route');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log("Server is running on port: ", port);
})

app.use('/api/v1/user', userRoutes);

app.all('*', (req, res) => {
    res.send("No Route Fount");
})

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
})

