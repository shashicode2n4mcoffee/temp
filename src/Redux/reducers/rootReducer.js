// src/redux/rootReducer.js
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import widgetBarReducer from './widegetBarReducer'
import eventPulseReducer from './eventPulseReducer'
import mediaSignalReducer from './mediaSignalReducer'
import sentimentSignalReducer from './sentimentSignalReducer'
import currenciesReducer from './currenciesReducer'
import authReducer from './authReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  currencies: currenciesReducer,
  widgetsBar: widgetBarReducer,
  eventPulse: eventPulseReducer,
  mediaSignal: mediaSignalReducer,
  sentimentSignal: sentimentSignalReducer,
})
