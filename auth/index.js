const express = require('express')
const router = express.Router()

// Routes below are prepended with /auth from mounting on app.js
router.get('/', function (req, res) {
    res.json({
        message: '👍🏻'
    })
})

router.post('/signup', function (req, res) {
    res.json({
        message: '✨'
    })
})

module.exports = router // exports this router usually to app.js