'use strict';
var emailArray = require('./email_log.json').emails;
var emailReport = require('./emailReport.js');

console.log('report: ',emailReport(emailArray));