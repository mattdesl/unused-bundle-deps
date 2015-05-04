# unused-bundle-deps

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

For a given browserify bundle, lists all the dependencies in your `package.json` which do not appear in that bundle. In large codebases this can be useful to find dependencies that are no longer relevant.


```sh
#install
npm install -g unused-bundle-deps

#use it like so
browserify index.js | unused-bundle-deps -p
```

Example output with `-p` (pretty) flag:

```
dependencies [5]
├── abs-svg-path
├── adaptive-bezier-curve
├── normalize-svg-path
├── svg-path-contours
└── vec2-copy
```

## Usage

[![NPM](https://nodei.co/npm/unused-bundle-deps.png)](https://www.npmjs.com/package/unused-bundle-deps)

### API

#### `unused(src, [opt], [cb])`

Finds unused dependencies in `src` by looking through your `"dependencies"` of the closest `package.json` file. Options can be:

- `cwd` the dir to search for pakage.json, defualt `process.cwd()`
- `filter` a filter function for [closest-package](https://www.npmjs.com/package/closest-package)

Callback is called with `(err, unusedDeps)` where `unusedDeps` is an array of names like `[ "xtend", "lodash" ]`. If there was an error reading the source bundle, finding the closest package, or reading it, `err` will be non-null.


### CLI

```
Usage:
  unused-bundle-deps [opts] < bundle.js

Options:
  --pretty, -p   pretty-print the results
  --cwd          current dir to search for package.json
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/unused-bundle-deps/blob/master/LICENSE.md) for details.
