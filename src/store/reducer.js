import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../comopnents/header/store'

export default combineReducers({
  header: headerReducer
})
