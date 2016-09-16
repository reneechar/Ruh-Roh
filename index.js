'use strict';
var email_log = require('./email_log.js');

var emailArray = email_log.emails;
var repeatedEmails = [];

for (var i = 0; i < emailArray.length; i++) {
	for (var j = 1; j < emailArray.length -1; j++) {
		if (emailArray[i].email === emailArray[j].email) {
			if(repeatedEmails.indexOf(emailArray[i].email) === -1) {
				repeatedEmails.push(emailArray[i].email);
			}
			emailArray.splice(j,1);
			j++;
		}
	}
}
console.log('repeat emails were sent to ',repeatedEmails);
