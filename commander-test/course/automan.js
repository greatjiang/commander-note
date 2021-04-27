const {program} = require('commander')

program
  .command('install [name]','install action')
  .command('search [query]','search action')
  .command('update','update action' ,{ executableFile: 'myUpdateSubCommand' })
  .command('list','list action',{isDefault:true})
  .parse()