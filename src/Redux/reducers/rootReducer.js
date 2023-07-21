// src/redux/rootReducer.js
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import widgetBarReducer from './widegetBarReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
  widgetsBar: widgetBarReducer
})
