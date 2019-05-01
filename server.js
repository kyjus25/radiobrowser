const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4200;
const request = require('request');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log(req.headers['x-openerp-session-id']);

app.get('/icy', (req, res) => {
  const options = {
    url: req.query.url,
    headers: {
      'Icy-MetaData': '1'
    }
  };
  request.head(options, (error, response, body) => {
      if (error) {
        res.send({});
      } else {
        // console.log(response.headers);
        if (response.headers.hasOwnProperty('icy-metaint')) {
          console.log(req.query.url, response.headers['icy-metaint']);

          const fileName = Buffer.from(req.query.url).toString('base64');
          const bufferSize = parseInt(response.headers['icy-metaint']);

          // request({url: req.query.url, encoding:null}).pipe(fs.createWriteStream('streams/' + fileName));
          fs.open('streams/' + fileName, 'r', function(status, fd) {
            if (status) {
              console.log(status.message);
              return;
            }
            // var buffer = Buffer.alloc(bufferSize);
            // fs.read(fd, buffer, 0, bufferSize * 16, 0, function(err, num) {
            //   console.log(buffer.toString('utf8', 0, num));
            // });
          });






          res.send({'icy-name': response.headers['icy-name']});
        } else {
          res.send({});
        }






      }
    });
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

app.listen(port, () => console.log(`Community Radio Browser frontend listening on port ${port}!`));

app.use( express.static(__dirname + '/dist/radiobrowser' ) );
