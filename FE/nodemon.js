var nodemon = require('nodemon');
nodemon("--legacy-watch --watch package.json,webpack.config.js --exec ' npm install && webpack'");