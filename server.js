const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4200;
const child_process = require('child_process');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log(req.headers['x-openerp-session-id']);

app.get('/icy', (req, res) => {
  child_process.exec('streamripper ' + req.query.url + ' -A -a', function(error, stdout, stderr){
    res.send(JSON.stringify(stdout));
  });
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

app.listen(port, () => console.log(`Community Radio Browser frontend listening on port ${port}!`));

app.use( express.static(__dirname + '/dist/radiobrowser' ) );
