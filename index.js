const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
var morgan = require('morgan')
const port = process.env.PORT || 3000;


// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('E-commerce project is loading..')
})

app.listen(port, (req, res) =>{
    console.log(`E-commerce project running port is: ${port}`)
})