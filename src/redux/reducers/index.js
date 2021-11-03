import { combineReducers } from 'redux'

import songReducer from './songReducer'
import genreReducer from './genreReducer'
import playReducer from './playReducer'
const rootReducer = combineReducers({
  songReducer,
  genreReducer,
  playReducer
})
export default rootReducer
