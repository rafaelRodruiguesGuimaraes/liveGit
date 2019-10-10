const express = require('express');

const app = express()

app.get('/teste', (req, res) => {
    return res.json({ message: 'Opa '})
});

app.listen(3333);