const express = require('express');
const cors = require('cors');
const app = express();
const xssClean = require('xss-clean')
const rateLimit = require('express-rate-limit')
require('dotenv').config();
var morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');


// rateLimit --> bar bar try korar limit
const rateLimiter = rateLimit({
    windowMS: 1 * 60 * 1000,  // 1 miniute create 
    max: 5,
    message: 'Too many requests from this IP. Please try again later'
})

// middleware
app.use(express.json());
app.use(cors());

app.use(rateLimiter);
app.use(morgan('dev'));
app.use(xssClean());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', userRouter)


app.get('/', (req, res) => {
    res.send('E-commerce project is loading..')
})


// client error handling
app.use((req, res, next) => {
    next(createError(404., 'Route not found'));
})

// server error handling
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
})

module.exports = app;