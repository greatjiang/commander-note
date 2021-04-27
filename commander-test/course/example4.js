const {program} = require('commander')

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza','aaaa');

program.parse(process.argv);

const options = program.opts();
// if (options.debug) console.log(options);
console.log(options)