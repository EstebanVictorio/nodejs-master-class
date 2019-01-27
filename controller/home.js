function home(){
  this.index = function (requestData, res){
    res.end("Home page");
  }
}

module.exports = home;
