# obj-to-string [![Build Status](https://www.travis-ci.org/zhw2590582/obj-to-string.svg?branch=master)](https://www.travis-ci.org/zhw2590582/obj-to-string)
> 对象转字符串（非JSON）

## Install

```
$ npm i -S obj-to-string
```

## Usage

```js
import objToString from "obj-to-string";

objToString({ a: { b: { c: 0 } } })
// '{ a: { b: { c: 0 } } }'

objToString([[[1, 2, 3], 2, 3]])
// '[[[1, 2, 3], 2, 3]]'

```

## License

MIT © [Harvey Zack](https://www.zhw-island.com/)