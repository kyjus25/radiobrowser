# radiobrowser

website frontend with angular 7.x for [radio-browser api](https://github.com/segler-alex/radiobrowser-api)

## Dependencies

- You will need `php-cli` to handle ICY metadata queries. MacOS should come with it by default. Run `php -v` to see if you have it installed. 

- You will need `pm2` in order to start the server in background mode. Install it with `npm install pm2 -g`. 

## Installation

- `git clone <repository-url>` this repository
- change into the new directory
- `npm install`

## Running / Development

Please note: API calls are proxied to **production environment** at <http://www.radio-browser.info/webservice>!

- `npm start`
- Visit your app at <http://localhost:4200/>

## Running / Production
The latest `/dist` directory is provided in the git repo already, no need to compile it prior to running. Simply run `npm run start-pm2` to start the pm2 background server. Run `npm run stop-pm2` to stop it.

