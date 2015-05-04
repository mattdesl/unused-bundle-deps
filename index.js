var readPackage = require('read-closest-package')
var snoop = require('snoop-bundle-deps')
var key = 'dependencies'

module.exports = function (src, opt, cb) {
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }
  opt = opt || {}
  cb = cb || function () {}

  snoop(src, opt, function (err, bundleDeps) {
    if (err) return cb(err)
    readPackage(opt, function (err, data) {
      if (err) return cb(err)
      var pkgDeps = Object.keys(data[key] || {})
      var unusedDeps = pkgDeps.filter(function (dep) {
        return bundleDeps.indexOf(dep) === -1
      })
      cb(null, unusedDeps)
    })
  })
}
