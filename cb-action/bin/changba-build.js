#!/usr/bin/env node

const {program} = require('commander')
const bar = require('progress-bar').create(process.stdout)

console.log('项目打包中')
let progress = 0

const timer = setInterval(()=>{
  progress+=0.1
  if(progress >=1){
    clearInterval(timer)
    bar.update(1)
    console.log('\n打包已完成')
    process.exit(0)
  }else{
    bar.update(progress)
  }
},500)
