var express = require('express')
var app = express()

const path = require('path');

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/', function (req, res) {
  res.send('Donnie sucks')
  console.log('Base app.get is working')
})

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
