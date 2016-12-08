const express = require('express')
    , app = express()
    , path = require('path')
    , PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'style')))

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'index.html'))
})

app.listen(PORT)
console.log('listening on port', PORT)
