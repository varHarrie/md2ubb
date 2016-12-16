#!/usr/bin/env node

var path = require('path')
var fs = require('fs')
var convert = require('./convert')

var argv = process.argv.splice(2)
var cwd = process.cwd()

var mdPath = path.join(cwd, argv[0])
var output = argv[1] ? path.join(cwd, argv[1]) : null

try {
  var stats = fs.statSync(mdPath)
  if (!stats.isFile()) throw new Error()
} catch (err) {
  console.log('No such file: ' + mdPath)
  process.exit(1)
}

var md = fs.readFileSync(mdPath, 'utf8')
var ubb = convert(md)

if (output) fs.writeFileSync(output, ubb)
else console.log(ubb)