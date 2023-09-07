import { expect } from 'chai'

console.log('Reading example.spec')
describe('First Test', () => {
  before(() => {
    console.log('Before hook')
  })

  beforeEach(() => {
    console.log('Before each hook')
  })
  it('check sum function', () => {
    let a = 2
    expect(a + a).to.eq(a * 2)
    expect(5 + 7).to.eq(12)
  })
  it('check multiplication function', () => {
    expect(5 * 5).to.eq(25)
  })
  after(() => {
    console.log('After hook')
  })
  afterEach(() => {
    console.log('After hook')
  })
})
console.log('Reading done')

describe('Second Test', () => {
  it('check string length', () => {
    const str = 'Hello'
    let result = str.length
    expect(result).to.eq(5)
  })
})
