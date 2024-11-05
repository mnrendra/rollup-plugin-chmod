import mainDummy from '@tests/dummies/main'

import index from '..'

describe('Test all features:', () => {
  it('Should return "Hello, world!"!', () => {
    const received = index()
    const expected = mainDummy
    expect(received).toBe(expected)
  })
})
