const express = require('express');
// const path = require('path');

// Initialize PORT
const PORT = process.env.PORT || 5000;

// Initialize app
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Welcome to Teamwork api.'));
app.use('/api', require('./routes/route'));


// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
