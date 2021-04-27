const {program} = require('commander')

function operate(newValue,oldValue){
  return newValue.split('-')
}

program
  .option('-l,--list <items>','自定义选项处理啊',operate)
  .parse()

const options = program.opts()

console.log(options)