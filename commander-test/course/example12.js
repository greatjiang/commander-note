const { program } = require('commander')

program
  .addHelpText(
    'after',
    `表头$custom-help --help`
  )
  .addHelpText(
    'beforeAll',
    `表头2:
     12345 上山打老虎`
  )
  .addHelpText(
    'afterAll',
    (context)=>{
      console.log(context.error,context.command)
    }
  )
  .parse()