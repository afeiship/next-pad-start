# next-pad-start
> Pad start for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-pad-start
```

## usage
```js
import '@jswork/next-pad-start';

nx.padStart('abc', 3, '0'); // 'abc'
nx.padStart('abc', 5, '0'); // '00abc'
```

## other solution
```js
('0' + 1).slice(-2)
// "01"
('0' + 12).slice(-2)
// "12"
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-pad-start/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-pad-start
[version-url]: https://npmjs.org/package/@jswork/next-pad-start

[license-image]: https://img.shields.io/npm/l/@jswork/next-pad-start
[license-url]: https://github.com/afeiship/next-pad-start/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-pad-start
[size-url]: https://github.com/afeiship/next-pad-start/blob/master/dist/next-pad-start.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-pad-start
[download-url]: https://www.npmjs.com/package/@jswork/next-pad-start
