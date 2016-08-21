const http = require('http');
const connect = require('connect');
const app = connect();
const path = require('path');

const serveIndex = require('serve-index');
const serveStatic = require('serve-static');

app.use(serveIndex(__dirname, {'template': 'index.html'}));
app.use(serveStatic(__dirname));

const settings = require('./settings');
const server = http.createServer(app).listen(settings.port, settings.host);

server.listen(settings.port, settings.host);
