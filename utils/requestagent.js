var url = require('url');
var ResponseAgent = require('./responseagent');

function requestagent(req, res, payload){
  this.requestData = {
    parsedUrl: url.parse(req.url,true),
    method:req.method.toLowerCase(),
    payload
  };
  this.requestData.route =
    this.requestData.parsedUrl.pathname.replace(/^\/+|\/+$/g,'');
  this.requestData.route = this.requestData.route == '' ?
    'home': this.requestData.route;
  this.resolver = new ResponseAgent(this.requestData,res);
}


module.exports = requestagent;
