
# dir-require
---
> Require a directory of js modules.

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![license MIT][license-image]][license-url]

## Install

```console
$ npm install --save dir-require
```


## Examples

require other modules in index.js when the file tree is like

```
.
├── index.js
├── testModule1.js
└── testModule2.js

```

your js code in index.js

```js
const models = require('dir-require').load(__dirname, {ignore: 'index.js'}); // 1st argument is absolute path

/*
You will get
models = {
    'testModule1': require('testModule1'),
    'testModule2': require('testModule2'),
}

*/
```

```js
const models = require('dir-require').loadArray(__dirname, {ignore: 'index.js'});

/*
You will get
models = [require('testModule1'), require('testModule2')];

*/
```

## Usage

```js
const moduleLoader = require('dir-require');

moduleLoader.load(dirpath, options);
moduleLoader.loadArray(dirpath, options);
```

#### dirpath

should be absolute path.

#### options.match

- String (only load this file)
- Array of String (only load files in array)
- Regx (load files match regx)

#### options.ignore

- String
- Array of String
- Regx
- if options.match is set options.ignore is no use.


## License

MIT © [liu946](https://liu946.github.io)

[travis-url]: https://travis-ci.org/liu946/npm-multi-require
[travis-image]: https://travis-ci.org/liu946/npm-multi-require.svg?branch=master

[coveralls-url]: https://coveralls.io/github/liu946/npm-multi-require?branch=master
[coveralls-image]: https://coveralls.io/repos/github/liu946/npm-multi-require/badge.svg?branch=master

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
