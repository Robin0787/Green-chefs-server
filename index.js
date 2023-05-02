const express = require('express');
const chefs = require('./Data/chefs.json');
const cors = require('cors');
const app = express();
const port = 1000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})
