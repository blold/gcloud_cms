const local_app = function () {}

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {
	// express app available here
	// don't forget these routes will be available on production server server (defaults to localhost:5000)
	var fs = require("fs");
	var express = require("express");

	var path = './_generated/index.html';

	function readAndReplaceFile(inputPath, callback){
		fs.readFile(inputPath, 'utf8', function(err,data){
			if(err){
				return console.log('read error: ' + err);
			}
			var result = data.replace(/\/assets\//g, '/pub/');
			console.log('Result: ' + result);
			callback(result);
		})
	}

	function writeFile(data){
		fs.writeFile('./index2.html', data, 'utf8', function(err){
			if(err){
				return console.log('wtire error' + err);
			}
		})
	}

	function main(){
		readAndReplaceFile(path, function(returnValue){
			console.log("returnValue: " + returnValue);
			writeFile(returnValue);
		})
	}

	app.listen(3002);
	main();
}

module.exports = new local_app()
