pad
===

pad is a simple utility function to prepend strings with a specified character up to a specified length.

Installation
------------

```
npm i @zertz/pad --save
```

> [npm@^2.7.0 is required to install scoped packages](https://docs.npmjs.com/getting-started/scoped-packages)

Usage
-----

```javascript
var pad = require('@zertz/pad')

console.log(pad('1234', '0', 8))

// 00001234
```

Tests
-----

```
npm test
```

Licence
-------

MIT
