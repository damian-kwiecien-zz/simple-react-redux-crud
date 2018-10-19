import { combineReducers } from 'redux'

const entities = (state = {}) => {
  return state
}

const rootReducer = combineReducers({
  entities,
  // pagination,
  // errorMessage,
})

export default rootReducer
