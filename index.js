// --------------------------------------------------------------------------------------
// NODE MODULES

const passport = require('passport')
const express = require('express')
const app = express()
const fs = require('fs')

const port = process.env.PORT || 3000

// --------------------------------------------------------------------------------------
// EXPRESS ENDPOINTS

app.get('/', function (req, res) {
    res.send('Hello')
})

// --------------------------------------------------------------------------------------
// EXPRESS PORT

app.listen(port, function () {
    console.log('Listening on port ' + port + '👍')
})