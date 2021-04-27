const {program} = require('commander')

program
  .arguments('<username> [password]')
  .description('test command',{
    username:'user to login',
    password:'password for user'
  })
  .action((username,password)=>{
    console.log('username:',username)
    console.log('password:',password)
  })
  .parse()