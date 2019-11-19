const express = require('express');
// const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => res.send('Welcome to Teamwork api.'));
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
