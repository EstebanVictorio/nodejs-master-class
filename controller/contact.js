function contact(){
  this.index = function (requestData, res){
    res.end("Contact");
  }
}

module.exports = contact;
