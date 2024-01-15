const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('E-commerce project is loading..')
})

app.listen(port, (req, res) =>{
    console.log(`E-commerce project running port is: ${port}`)
})