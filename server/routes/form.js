const express = require('express')
const router = express.Router()
const {saveForm, getUsers} = require('../controllers/form')


router
    .route('/')
    .post(saveForm)
    .get(getUsers)

module.exports = router