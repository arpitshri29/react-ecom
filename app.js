// Require
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const userRoutes = require('./routes/user');


// App
const app = express();

// Database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Database connected');
});

// Routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});