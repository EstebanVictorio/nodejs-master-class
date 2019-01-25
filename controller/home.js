function home(){
  this.index = function (requestData, res){
    res.end("Home");
  }
}

module.exports = home;
