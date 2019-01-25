var iohandlers = require('./iohandlers')

function requestResolver(req, res){
  req.on('end',iohandlers.enhancedEnd(req,res));
  req.on('data',iohandlers.data);
}

function startupResolver(){
  console.log("Listening at port 3000");
}

module.exports = {
  requestResolver,
  startupResolver
};
