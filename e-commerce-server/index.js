const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
var morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const isLoggedIn = (req, res, next) => {
    const login = true;
    if (login) {
        next();
    } else {
        return res.status(401).json({ message: 'Please Login First' })
    }
}

app.get('/', (req, res) => {
    res.send('E-commerce project is loading..')
})

app.get('/users', isLoggedIn, (req, res) => {
    res.send({ message: 'Users is returned' })
})

// client error handling
app.use((req, res, next) =>{
    res.status(404).json({message: 'Route not found'})
    next();
}) 

// server error handling
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(404).send({message: 'Something Broke!'})
})

app.listen(port, (req, res) => {
    console.log(`E-commerce project running port is: ${port}`)
})