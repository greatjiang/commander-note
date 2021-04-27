const {program} = require('commander')

program
  .option('-s, --small <numbers...>', 'small')
  .option('-b, --big [aaa...]', 'big');

program.parse();

const options = program.opts();
// if (options.debug) console.log(options);
console.log(options)