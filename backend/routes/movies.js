const express = require('express')
const { createMovie } = require('../controllers/movies')
const router = express.Router()

router.route('/create').post(createMovie)

module.exports = router