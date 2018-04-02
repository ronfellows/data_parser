var exports = module.exports = {};
var promise = require('bluebird');
var libxmljs = require("libxmljs");

//Validate the XML
exports.checkXML = function(inputData){
    var xmlDoc = libxmljs.parseXml(inputData);
    console.log(xmlDoc);
  
}

//Convert data to XML       
exports.convertToXML = function(inputData){
    this.checkXML(inputData).then(function(){

    }).catch(function(err){
        console.log(err);
    });
}