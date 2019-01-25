function getHandler(routeMap,target,fallback){
  var currentRoute = routeMap.shift();
  if(typeof(target[currentRoute]) !== 'undefined'){
    return typeof(target[currentRoute]) === 'object' ?
      getHandler(target[currentRoute],routeMap,fallback) : target[currentRoute];
  }
  return function(requestData, res){
    fallback(res);
  };
}

module.exports = {
  getHandler
};
