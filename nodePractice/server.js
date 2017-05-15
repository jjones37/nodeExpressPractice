var express = require('express')
var app = express()

const path = require('path');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
