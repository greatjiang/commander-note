const {program} = require('commander')

program
  .option('--no-coriander','remove coriander')
  .parse()

  const options = program.opts()
  
  console.log(options)

// program
//   .option('--coriander','coriander',false)
//   .option('--no-coriander','remove coriander')
//   .parse()

//   const options = program.opts()
  
//   console.log(options)