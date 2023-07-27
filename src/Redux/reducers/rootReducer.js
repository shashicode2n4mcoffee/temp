// src/redux/rootReducer.js
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import widgetBarReducer from './widegetBarReducer'
import authReducer from './authReducer'
import eventPulseReducer from './eventPulseReducer'
import mediaSignalReducer from './mediaSignalReducer'
import sentimentSignalReducer from './sentimentSignalReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
  widgetsBar: widgetBarReducer,
  auth: authReducer,
  eventPulse: eventPulseReducer,
  mediaSignal: mediaSignalReducer,
  sentimentSignal: sentimentSignalReducer,
})
