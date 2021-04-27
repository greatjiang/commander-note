const {program} = require('commander')

program
  .option('-t,--test','我是测试')
  .option('-h,--hello-world','你好啊')
  .parse()

const options = program.opts()

console.log(options)
