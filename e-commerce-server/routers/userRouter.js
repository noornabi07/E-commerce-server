const express = require('express');
const { getUsers } = require('../controllers/usersControllers');
const userRouter = express.Router();


// location /api/users
userRouter.get('/', getUsers)


module.exports = userRouter