const TapMap = require('.')

describe('TapMap', () => {
  describe('.tap()', () => {
    it('accepts a builder function', () => {
      const map = new TapMap()
      expect(map.get('foo')).toBe(undefined)
      expect(map.tap('foo', () => 'bar')).toEqual('bar')
      expect(map.get('foo')).toEqual('bar')
    })

    it('accepts a value (non-function)', () => {
      const map = new TapMap()
      expect(map.tap('foo', 'bar')).toEqual('bar')
      expect(map.get('foo')).toEqual('bar')
    })

    it('does not call the builder if it has the key', () => {
      const build = jest.fn(() => false)
      const map = new TapMap()
      map.set('foo', 'bar')
      expect(map.tap('foo', build)).toEqual('bar')
    })

    it('builds a new TapMap by default', () => {
      const map = new TapMap()
      expect(map.tap('hi')).toBeInstanceOf(TapMap)
    })

    it('can be tapped deeply', () => {
      const map = new TapMap()
      expect(map.tap(1).tap(2).tap(3, '!')).toEqual('!')
      expect(map.get(1).get(2)).toBeInstanceOf(TapMap)
    })
  })
})
