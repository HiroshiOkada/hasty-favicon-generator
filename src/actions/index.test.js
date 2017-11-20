import { CHANGE_MESSAGE, changeMessage } from './index'

describe('types', () => {
  it('shoud have correct string', () => {
    expect(CHANGE_MESSAGE).toBe('CHANGE_MESSAGE')
  })
})

describe('action creaters', () => {
  it('shoud create correct action', () => {
    expect(changeMessage('Hi')).toEqual({ type: CHANGE_MESSAGE, message: 'Hi' })
  })
})
