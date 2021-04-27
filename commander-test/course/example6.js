const {program} = require('commander')

// program
//   .version('0.0.1')
//   .parse()

program
  .version('0.0.2','-a,--aaa','我是自定义版本号啊')
  .parse()