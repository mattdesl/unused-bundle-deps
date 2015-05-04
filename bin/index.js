#!/usr/bin/env node
var unused = require('../')
var argv = require('minimist')(process.argv.slice(2))
var cwd = argv.cwd || process.cwd()

require('get-stdin')(function (data) {
  if (data.length === 0) {
    return usage(1)
  }

  unused(data, {
    cwd: cwd
  }, function (err, deps) {
    if (err) {
      console.error('ERR: Could not parse browserify bundle')
      process.exit(1)
    }

    var out
    if (argv.pretty || argv.p) {
      out = require('archy')({
        label: 'unused dependencies [' + deps.length + ']',
        nodes: deps
      })
    } else {
      out = JSON.stringify(deps)
    }
    console.log(out)
  })
})

function usage (code) {
  console.log('Usage:\n  unused-bundle-deps [opts] < bundle.js')
  process.exit(code || 0)
}
