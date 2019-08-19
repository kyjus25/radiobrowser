const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 4200;
const child_process = require('child_process');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/icy', (req, res) => {
  const options = {
    timeout: 10000,
    killSignal: 'SIGKILL'
  };
  child_process.exec('php icy.php ' + req.query.url, options, function(error, stdout, stderr){
    if (stdout !== '') {
      if (!stdout.includes('fopen')) {
        res.send({'icy-title': stdout});
      } else {
        res.send({});
      }
    } else {
      res.send({});
    }
  }, error => {
    res.send({});
  });
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

app.listen(port, () => console.log(`Community Radio Browser frontend listening on port ${port}!`));

app.use( express.static(__dirname + '/docs' ) );
