const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const fs = require('fs');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  //data === 'cat bash.js'
  const input = data.toString().trim().split(' ');
  const cmd = input[0];
  const fileName = input[1];

  if (cmd === 'pwd') pwd();
  if (cmd === 'ls') fs.readdir('./', 'utf8', ls);
  if (cmd === 'cat') fs.readFile(fileName, cat);
});
