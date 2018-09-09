const path = require('path');
const tags = require('./tags');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(tags);

app.use(express.static('dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(PORT, () => console.log(`Garage player server stared on port: ${PORT}`));

