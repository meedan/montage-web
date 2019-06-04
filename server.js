const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const port = process.env.SERVER_PORT || 8080;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (process.env.NODE_ENV === 'production') {
    res.header('Cache-Control', 'public, s-maxage=900, max-age=300');
  } else {
    res.header('Cache-Control', 'public, no-cache');
  }

  next();
});

// static assets first
app.use(serveStatic('build', { index: ['index.html'] }));

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

console.log('Starting server on port ' + port);
app.listen(port);
