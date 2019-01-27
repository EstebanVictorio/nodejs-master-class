var http = require('http');
var startupSettings = require('./settings/startup');
var resolvers = require('./utils/resolvers');
var server = http.createServer(resolvers.requestResolver);
server.listen(startupSettings.port,resolvers.startupResolver);
// commit comment testing
