var status = require('./../settings/statuscodes');

function api(){
  var apiBuffer = '';

  this.storeData = function (requestData, res){
    apiBuffer+= requestData.payload;
    console.log('Current data on buffer:');
    console.log(apiBuffer);
    res.writeHead(status.OK);
    res.end('Added data!');
  }
}

module.exports = api;
