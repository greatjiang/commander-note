#!/usr/bin/env node

const {program} = require('commander')
const bar = require('progress-bar').create(process.stdout)
const chalk = require('chalk')

program
  .option('-n,--name [name]','项目名称')
  .option('-o,--operate [operate]','操作人员')
  .parse()

const options = program.opts()

console.log('项目创建中')
let progress = 0

const timer = setInterval(()=>{
  progress+=0.1
  if(progress >=1){
    clearInterval(timer)
    bar.update(1)
    console.log(`\n创建已完成`)

    if(options.name){
      console.log(chalk.cyan(`\n项目名称: ${options.name}`))
    }

    if(options.operate){
      console.log(chalk.cyan(`\n项目名称: ${options.operate}`))
    }

    // process.exit(0)
  }else{
    bar.update(progress)
  }
},500)
