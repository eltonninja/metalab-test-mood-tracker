require('dotenv').config();
const { logger } = require('./middleware/logger');

const errorHandler = require('./middleware/errorHandler');
const express = require('express');
const app = express();
const cors = require('cors')

const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const corsOptions = require('./config/corsOptions');

const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

// Routes
app.use('/', require('./routes/root'));
app.use('/moods', require('./routes/moods'))

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
