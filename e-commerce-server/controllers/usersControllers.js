// const createError = require('http-errors');

const users = require("../models/usersModels")


const getUsers = (req, res, next) => {
    try{
        res.status(200).send({ message: 'user were returned', users: users })
    }catch (err){
        next(err)
    }
}

module.exports = {getUsers}