function defaultC(){
  this.notFound = function (method,res,requestData){
    res.end("Page not found: " + method.toUpperCase());
  }
}

module.exports = defaultC;
