const {program} = require('commander')

program
  .arguments('[name] [password]')
  .option('-t,--title <honorific>','title to use before name')
  .option('-d,--debug','display some debugging')
  .action((name,password,options,command) =>{
    console.log(`name:${name}`)
    console.log(`options:${JSON.stringify(options)}`)
    console.log(`command:${command.name()}`)
  })
  .parse()