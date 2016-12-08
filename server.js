const express = require('express')
    , app = express()
    , path = require('path')
    , PORT = process.env.PORT || 8080

app.use('/public', express.static(path.join(__dirname, '../public')))
app.get('/', function (_, res) { res.sendFile(path.join(__dirname, '/../index.html')) })


app.listen(PORT)
console.log('listening on port', PORT)
