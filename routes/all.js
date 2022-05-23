const { application } = require('express')
const express = require('express')
const router = express.Router()

const Url = require('../models/Url')

router.get('/', async (req, res) => {
    try {
        const urls = await Url.find()
        res.json(urls)
    } catch (error) {
        console.error(error)
        res.status(500).json('Server error')
    }
})

module.exports = router