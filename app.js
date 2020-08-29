// Require
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();

// Database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Database connected');
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello from node!')
});

const port = process.env.PORT || 8000

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});