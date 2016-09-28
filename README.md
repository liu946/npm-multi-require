
## Install

```console
$ npm install --save multi-require
```


## Usage

require other modules in index.js when the file tree is like

```
.
├── index.js
├── testModule1.js
└── testModule2.js

```

your js code in index.js

```js
const models = require('multi-require').load(__dirname, {ignore: 'index.js'}); // 1st argument is absolute path

/*
You will get
models = {
    'testModule1': require('testModule1'),
    'testModule2': require('testModule2'),
}

*/
```

```js
const models = require('multi-require').loadArray(__dirname, {ignore: 'index.js'});

/*
You will get
models = [require('testModule1'), require('testModule2')];

*/
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
