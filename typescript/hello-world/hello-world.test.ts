import { describe, expect, it } from 'bun:test'
import { hello } from './hello-world'

describe('Hello World', () => {
  it('says hello world', () => {
    expect(hello()).toEqual('Hello, World!')
  })
})
