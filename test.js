#!/usr/bin/env node
var ccli = require('.')(__dirname)

// console.log(ccli);

// console.log(ccli.fp);
// console.log(ccli.cp);
// console.log(ccli.argv);
//
// console.log('(%d,%d)', ccli.argv.z, ccli.argv.y);
//
// console.log(ccli.argv._);
//

console.log(ccli);


// ccli.link('node_modules','aaa')


ccli.link('node_modules','aaa', function(){
  console.log('------------------------')
})