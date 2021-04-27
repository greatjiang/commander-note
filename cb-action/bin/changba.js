#!/usr/bin/env node

const {program} = require('commander')

program
  .command('create [name]','创建项目')
  .command('build [name]','打包项目')
  .parse()