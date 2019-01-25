var buffer = '';
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf-8');
var RequestAgent = require('./requestagent');

function enhancedEnd(req,res){
  buffer+= decoder.end();
  var agent = new RequestAgent(req, res, buffer);
  return agent.resolver.handle;
}


function data(data){
  buffer+= decoder.write(data);
}


module.exports =
{
  enhancedEnd,
  data
};
