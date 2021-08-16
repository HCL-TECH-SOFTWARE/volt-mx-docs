class TapMap extends Map {
  constructor(...args) {
    super(...args)
  }

  tap(key, value = TapMap.create) {
    if (!this.has(key)) {
      const actual = (typeof value === 'function') ? value() : value
      this.set(key, actual)
      return actual
    }
    return this.get(key)
  }
}

TapMap.create = () => new TapMap()

module.exports = TapMap
