## 定义
> 完整的node.js命令行解决方案。


## 安装&声明
> npm install commander

全局对象
  const {program} = require('commander')

源码
  exports = module.exports = new Command()
  exports.program = exports

本地创建
  const {Command} = require('commander')
  const program = new Command()
  program.version('1.1.1')

源码
  exports.Command = Command

example1.js

### version
> 版本选项

### parse
> 解析选项
三种 默认 process.argv

## 选项

### 定义
> Commander 使用.option() 方法来定义选项，同时可以附加选项的简介。
> 每个选项可以定义一个短选项名称(-后面接单个字符)和一个长选项名称(--后面接一个或多个单词)，使用逗号、空格或者 | 分隔
example3.js

### 获取
> 选项可以通过在Command对象上调用.opts()方法来获取。
> 对于多个单词的长选项，使用驼峰法获取，例如--template-engine选项通过program.opts().templateEngine获取。
> 多个短选项可以合并简写，其中最后一个选项可以附加参数。
> -- 可以标记选项的结束，后续的参数均不会被命令解释，可以正常使用

example3.js

### 选项类型
1. boolean型选项
无需配置参数

2. 带参数选项
需要在选项后面配置参数 如: -g,--great-jiang <value>
example4.js

短选项参数
  -p123
  -p 123

长选项参数
  --pizza-type=345

选项的默认值
  带参数的选项可以设置一个默认值

  <>表示必填选项
    必须有默认值或者必须在命令行中输入值

  []表示选填选项
    没有值的话就当成boolean

  变长参数选项
    定义选项时，可以通过使用...来设置参数为可变长参数。

  example5.js

版本选项
  默认选项名 -V,--version
  可以自定义选项名称

  example6.js

取反选项
  可以定义一个以no-开头的boolean型长选项。在命令行中使用该选项时，会将对应选项的值置为false。

  如果已经定义了--foo，那么再定义--no-foo并不会改变它本来的默认值。

  example7.js

addOption
  大多数情况下，选项均可通过.option()方法添加。但对某些不常见的用例，也可以直接构造Option对象，对选项进行更详尽的配置。

自定义选项处理
  选项的参数可以通过自定义函数来处理，该函数接收两个参数：用户新输入的参数值和当前已有的参数值（即上一次调用自定义处理函数后的返回值），返回新的选项参数值。
  example8.js


## 命令
> 通过.command()或.addCommand()可以配置命令，有两种实现方式：为命令绑定处理函数，或者将命令单独写成一个可执行文件。

### 使用
> .command()的第一个参数可以配置命令名称及命令参数，参数支持必选（尖括号表示）、可选（方括号表示）及变长参数（点号表示，如果使用，只能是最后一个参数）。

1. 通过绑定处理函数实现命令
  .action((source,destination)=>{})

2. 通过独立的可执行问价能实现命令

example9.js

hidden:true 该命令不会打印在帮助信息里
isDefault:true  若没有指定其他子命令，则会默认执行这个命令

example9.js

### 设置命令参数
1. 顶层命令通过.arguments()设定参数
2. 子命令是写在.command()内
3. 向.description()方法传递第二个参数，从而在帮助中展示命令参数信息。
4. 最后一个参数支持声明可变参数<dirs...> 会以数组的形式传递给处理函数。

example10.js

### 处理函数
> 命令处理函数的参数，为该命令声明的所有参数，除此之外还会附加两个额外参数：选项、该命令对象自身

example11.js

### 独立的可执行（子）命令
> 当.command() 带有描述参数时，就意味着使用独立的可执行文件作为子命令。

Commander 将会尝试在入口脚本（例如 ./examples/pm）的目录中搜索program-command形式的可执行文件，例如pm-install, pm-search。

executableFile
  executableFile: 'myUpdateSubCommand' 执行指定文件的文件名

automan.js

## 自动化帮助信息
> 帮助信息是Commander基于你的程序自动生成的，默认的帮助选项是-h,--help。
Usage 首行信息  提示用法
Options 选项
Commands 命令


### 自定义帮助信息
1. 可以添加额外的帮助信息，与内建的帮助一同展示

example12.js

位置参数对应的展示方式如下：
  beforeAll：作为全局标头栏展示
  afterAll：作为全局末尾栏展示
  before：在内建帮助信息之前展示
  after：在内建帮助信息之后展示

  beforeAll和afterAll两个参数作用于命令及其所有的子命令。

### 使用代码展示帮助信息
.help() 展示帮助信息并退出。?
.outputHelp() 只是展示帮助信息。?
.helpInformation() 得到字符串形式的内建的帮助信息，以便用于自定义的处理及展示。?

example13.js


### .usage 和 .name
> 通过这两个选项可以修改帮助信息的首行提示
example14.js

### .helpOption(flags, description)
> 每一个命令都带有一个默认的帮助选项。可以重写flags和description参数。传入false则会禁用内建的帮助信息。

example15.js

### .addHelpCommand()
> 如果一个命令拥有子命令。它也将有一个默认的帮助子命令。使用.addHelpCommand()和.addHelpCommand(false)可以打开或关闭默认的帮助子命令。

program.addHelpCommand('assist [command]', 'show assistance');

### 其他帮助配置
> 内建帮助信息通过Help类进行格式化。
1. 可以使用.configureHelp()来更改其数据属性和方法
  helpWidth：指明帮助信息的宽度。可在单元测试中使用。
  sortSubcommands：以字母序排列子命令
  sortOptions：以字母序排列选项

2. 可以使用.createHelp()来创建子类，从而配置Help类的行为。

## Node.js 命令行程序开发教程

### #!/usr/bin/env node
增加这一行是为了指定用node执行脚本文件

#!
  用于指明这个脚本的解释程序

/usr/bin/env
  就是告诉系统可以在PATH目录中查找

所以配置#!/usr/bin/env node, 就是解决了不同的用户node路径不同的问题，可以让系统动态的去查找node来执行你的脚本文件。

为什么会出现No such file or directory的错误？因为你的node安装路径没有添加到系统的PATH中。

which node命令来找到你本地的node安装路径

### npm link
> 开发NPM模块的时候，有时我们会希望，边开发边试用。比如本地调试的时候，require('module')会自动加载本机开发中的模块。
> Node规定，使用一个模块时，需要将其安装到全局的或项目的node_modules目录之中。
> 对于开发中的模块，解决方法就是在全局的node_modules目录之中，生成一个符号链接，指向模块的本地目录。
> npm link 就能起到这个作用，会自动建立这个符号链接。

操作
  1. #!/usr/bin/env node
  2. chmod
  3. package.json

npm unlink myModule

symlink
  符号链接

demo

## 参考资料
[Commander](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)
[Node.js 命令行程序开发教程](https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
[npm link](https://javascript.ruanyifeng.com/nodejs/npm.html#toc18)
[Linux chmod命令](https://www.runoob.com/linux/linux-comm-chmod.html)




---分割线---
Help
  helpWidth
  sortSubcommands
  sortOptions

  visibleCommands
  visibleOptions
  visibleArguments
  subcommandTerm
  optionTerm
  longestSubcommandTermLength
  longestOptionTermLength
  longestArgumentTermLength
  commandUsage
  commandDescription
  subcommandDescription
  optionDescription
  formatHelp
  padWidth
  wrap

Option
  flags
  description
  required
  optional
  variadic
  mandatory
  short
  long
  negate 否定
  defaultValue
  defaultValueDescription
  parseArg
  hidden
  argChoices

  default
  argParser
  makeOptionMandatory
  hideHelp
  _concatValue
  choices
  name
  attributeName
  is

CommanderError
  name
  code
  exitCode
  nestedError

InvalidOptionArgumentError
  name

Command
  commands
  options
  parent
  _allowUnknownOption
  _allowExcessArguments
  _args
  rawArgs
  _scriptPath
  _name
  _optionValues
  _storeOptionsAsProperties
  _actionResults
  _actionHandler
  _executableHandler
  _executableFile
  _defaultCommandName
  _exitCallback
  _aliases
  _combineFlagAndOptionalValue
  _description
  _argsDescription
  _enablePositionalOptions
  _passThroughOptions
  _outputConfiguration
  _hidden
  _hasHelpOption
  _helpFlags
  _helpDescription
  _helpShortFlag
  _helpLongFlag
  _addImplicitHelpCommand
  _helpCommandName
  _helpCommandnameAndArgs
  _helpCommandDescription
  _helpConfiguration

  command
  createCommand
  createHelp
  configureHelp
  configureOutput
  addCommand
  arguments
  addHelpCommand
  _hasImplicitHelpCommand
  _parseExpectedArgs
  exitOverride
  _exit
  action
  createOption
  addOption
  _optionEx
  option
  requiredOption
  combineFlagAndOptionalValue
  allowUnknownOption
  allowExcessArguments
  enablePositionalOptions
  passThroughOptions
  storeOptionsAsProperties
  _setOptionValue
  _getOptionValue
  parse
  parseAsync
  _executeSubCommand
  _dispatchSubcommand
  _parseCommand
  _findCommand
  _findOption
  _checkForMissingMandatoryOptions
  parseOptions
  opts
  _displayError
  missingArgument
  optionMissingArgument
  missingMandatoryOptionValue
  unknownOption
  _excessArguments
  unknownCommand
  version
  description
  alias
  aliases
  usage
  name
  helpInformation
  _getHelpContext
  outputHelp
  helpOption
  help
  addHelpText

camelcase()

outputHelpIfRequested()

humanReadableArgName()

_parseOptionFlags()

incrementNodeInspectorPort()





EventEmitter
path
fs

child_process

class
filter()
split()
shift()
sort()
replace()
map()
join()
reduce()
max()
min()
stringify()
concat()
repeat() repeat() 方法字符串复制指定次数。 ES6
substr()
slice()
trimRight()
  trimEnd() 方法从一个字符串的末端移除空白字符。trimRight() 是这个方法的别名。
  一个新字符串，表示从调用字串的末（右）端除去空白。
includes()
!!
isArray()
apply()
forEach()
find()
locales()
  referenceStr.localeCompare(compareString[,locales[,options]])
  返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同
  -1 在前面个 
  1  在后面
  0  相同位置



opts() 1706
parse() 1245
passThroughOptions 1172
enablePositionalOptions 1158
addOption 955
action 910
addCommand 741
Option 347
createOption 945
  
