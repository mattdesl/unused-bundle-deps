var unused = require('../')
var test = require('tape')
var fs = require('fs')
var path = require('path')

test('lists unused package.json dependencies in a bundle', function (t) {
  t.plan(1)
  var src = fs.readFileSync(path.join(__dirname, 'fixtures', 'bundle.js'))
  unused(src, function (err, unused) {
    if (err) t.fail(err)
    t.deepEqual(unused, ['archy', 'get-stdin', 'minimist',
      'read-closest-package', 'snoop-bundle-deps'])
  })
})

test('lists unused package.json dependencies in a bundle', function (t) {
  t.plan(1)
  var src = fs.readFileSync(path.join(__dirname, 'fixtures', 'this-bundle.js'))
  unused(src, function (err, unused) {
    if (err) t.fail(err)
    t.deepEqual(unused, ['snoop-bundle-deps'])
  })
})
