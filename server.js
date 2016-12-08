const express = require('express')
    , app = express()
    , path = require('path')
    , PORT = process.env.PORT || 8080

app.use(express.static('public'))
app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(PORT)
console.log('listening on port', PORT)
