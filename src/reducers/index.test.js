import theApp from './index'
import { changeMessage } from '../actions'

describe('changeMessage', () => {
  it('should change message', () => {
    expect(theApp({ message: 'old msg' }, changeMessage('new msg'))).toEqual({
      message: 'new msg',
    })
  })
})
