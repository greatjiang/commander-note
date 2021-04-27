const {program} = require('commander')

program
  // .helpOption()
  .command('build [name]')
  // .addHelpCommand('aaa','bbb')
  .parse()