import { all } from 'redux-saga/effects'
import {
  usersSaga,
  widgetBarSaga,
  eventPluseSaga,
  mediaSignalSaga,
  sentimentSignalSaga,
  currenciesSaga,
  authSaga,
} from './index'

export function* rootSaga() {
  yield all([
    authSaga(),
    usersSaga(),
    currenciesSaga(),
    widgetBarSaga(),
    eventPluseSaga(),
    mediaSignalSaga(),
    sentimentSignalSaga(),
  ])
}
