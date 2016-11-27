var path = require('path');
var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// Hot loading with webpack if in development
if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static('dist/client'));
} else {
  var webpack = require('webpack');
  var config = require('../../webpack.config');
  var compiler = webpack(config);
  var devMiddleware = require('webpack-dev-middleware');
  var hotMiddleware = require('webpack-hot-middleware');

  app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
  }));

  app.use(hotMiddleware(compiler));
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening on port', PORT);
});
