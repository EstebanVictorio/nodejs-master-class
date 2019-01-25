function about(){
  this.index = function (requestData, res){
    res.end("About [Payload:"+JSON.stringify(requestData.payload)+"]");
  }
}

module.exports = about;
