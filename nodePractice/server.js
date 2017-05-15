var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Donnie sucks cock from hell')
  console.log('Base app.get is working')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
