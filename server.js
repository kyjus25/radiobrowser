const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4200;
const icy = require('icy');
const request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log(req.headers['x-openerp-session-id']);

app.get('/icy', (req, res) => {

  async function f() {
    const icyResponse = await icy.get(req.query.url, function (icyResponse) {
      icyResponse.once('metadata', function (metadata) {
        var parsed = icy.parse(metadata);
        console.error(parsed);
        return Promise.resolve(parsed);
      });
      setTimeout(function(){ return Promise.resolve({}) }, 3000);
    });
    let result = await icyResponse; // wait till the promise resolves (*)
    res.send(result);
  }
  f().catch(error => console.log('ERRPR', error));




});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

app.listen(port, () => console.log(`Community Radio Browser frontend listening on port ${port}!`));

app.use( express.static(__dirname + '/dist/radiobrowser' ) );
