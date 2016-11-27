var path = require('path');
var express = require('express');

var app = require('./dist/server').default;

app.use('/static', express.static('dist/client'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(err) {
  if (err) return console.error(err);
  console.log('Listening on port', PORT);
});
