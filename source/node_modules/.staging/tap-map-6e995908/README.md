# TapMap
The TapMap class extends JavaScript's native [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) with a single, powerful method:

```js
const map = new TapMap()
// "set the key 'foo' to 'bar' if 'foo' is not set"
map.tap('foo', 'bar')       // 'bar'
map.get('foo')              // 'bar'

// "set the key 'foo' to `Math.random()` if 'foo' is not set"
map.tap('foo', Math.random) // 'bar' (already set)
map.tap('bar', Math.random) // 0.3144890857392...
```

The default factory function returns a `new TapMap`, so you can
use it to quickly build and then query deep structures:

```js
const map = new TapMap()
map.tap(1).tap(2).tap(3, '!') // '!'
map.get(1).get(2)             // TapMap({3: '!'})
```

...or you can provide your own factory:

```js
const map = new TapMap()
const values = ['foo', 'bar', 'foo', 'baz']
// it's better not to define this in the loop
const makeList = () => []
for (const [index, value] of Object.entries(values)) {
  map.tap(value, makeList).push(index)
}
for (const [value, indices] of map.entries()) {
  console.log(`${value}: ${indices.join(', ')}`)
}
```

## Install
```
npm install tap-map
```

## Usage
```js
const TapMap = require('tap-map')
const map = new TapMap()
// do your worst
```
