var router = require('./../routing/handlers');
var routingHelpers = require('./../routing/helpers');

function responseagent(requestData, res){
  var routeMap = requestData.route.split('\/');
  this.handle = function(){
    routingHelpers.getHandler(routeMap,router[requestData.method],
      router[requestData.method].notFound)(requestData,res);
  };
}


module.exports = responseagent;
