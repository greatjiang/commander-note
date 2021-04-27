const {program} = require('commander')

program
  .command('build')
  .description('build action')
  .action(()=>{
    console.log('build 123')
  })


program
  .command('deploy',{hidden:true})
  .description('deploy action')
  .action(()=>{
    console.log('deploy 123')
  })

program
  .command('serve',{isDefault:true})
  .description('launch web server')
  .option('-p,--port <port_number>','web port')
  .action((options) =>{
    console.log(`server on port ${options.port}`)
  })

program
  .parse()
