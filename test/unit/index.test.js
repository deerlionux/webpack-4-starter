import { hello } from '@src/index'

describe('hello', () => {
  it('should output webpack-4-starter', () => {
    expect(hello()).toBe('webpack-4-starter')
  })
})
