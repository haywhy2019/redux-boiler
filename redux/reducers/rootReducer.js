// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import {addUser} from './invite'
import navbar from './navbar'
import layout from './layout'
import management from './management'

const rootReducer = combineReducers({
  auth,
  addUser,
  navbar,
  layout,
  management
})

export default rootReducer
