const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4200;
const icy = require('icy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log(req.headers['x-openerp-session-id']);

app.get('/icy', (req, res) => {
  try {
    icy.get(req.query.url, function (icyResponse) {
      // log any "metadata" events that happen
      icyResponse.once('metadata', function (metadata) {
        var parsed = icy.parse(metadata);
        console.error(parsed);
        res.send(parsed)
      });
      icyResponse.once('timeout', function (metadata) {
        res.send({});
      });
      icyResponse.once('end', function (metadata) {
        res.send({});
      });
      setTimeout(function(){ res.send({}); }, 3000);
    });
  }
  catch(err) {
    console.log();
    res.send({});
  }
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

app.listen(port, () => console.log(`Community Radio Browser frontend listening on port ${port}!`));

app.use( express.static(__dirname + '/dist/radiobrowser' ) );
