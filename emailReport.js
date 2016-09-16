'use strict';
var index = require('./index.js');


module.exports = function (jsonFile) {
	var repeatedEmails = {};

	for (var i = 0; i < jsonFile.length; i++) {
		if (repeatedEmails.hasOwnProperty(jsonFile[i].email) === false) {
			repeatedEmails[jsonFile[i].email] = 0;
		}
		repeatedEmails[jsonFile[i].email]++;
	}
	return repeatedEmails;

}