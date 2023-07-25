// src/redux/rootReducer.js
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import widgetBarReducer from './widegetBarReducer'
import authReducer from './authReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
  widgetsBar: widgetBarReducer,
  auth: authReducer,
})
