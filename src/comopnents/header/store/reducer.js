import { fromJS } from 'immutable'
import { constant } from './index'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constant.SEARCH_FOCUS) {
    return state.set('focused', true)
  }

  if (action.type === constant.SEARCH_BLUR) {
    return state.set('focused', false)
  }

  return state
}
