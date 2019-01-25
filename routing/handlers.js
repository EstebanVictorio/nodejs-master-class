var DefaultController = require('./../controller/default');
var HomeController = require('./../controller/home');
var AboutController = require('./../controller/about');
var ContactController = require('./../controller/contact');
var ApiController = require('./../controller/api');



var mainHandlers = {
  defaultHandler: new DefaultController(),
  homeHandler: new HomeController(),
  aboutHandler: new AboutController(),
  contactHandler: new ContactController(),
  apiHandler: new ApiController()
};

module.exports = {
  get: {
    home: mainHandlers.homeHandler.index,
    about: mainHandlers.aboutHandler.index,
    contact: mainHandlers.contactHandler.index,
    notFound: function (res){
      mainHandlers.defaultHandler.notFound('get',res);
    },
  },
  post: {
    notFound: function (res){
      mainHandlers.defaultHandler.notFound('post',res);
    },
    storeData:mainHandlers.apiHandler.storeData
  },
};
