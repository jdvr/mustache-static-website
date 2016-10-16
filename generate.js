#!/usr/bin/node
var exec = require('child_process').exec;
var pages = require('./generable-pages').pages;
var commandGenerator = require("./command-generator");
console.log(new Date().toISOString());
commandGenerator(pages).forEach(function (command, index, commands) {
    exec(command, function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
      }
      console.log(command.split(">")[1]);
    });
});
