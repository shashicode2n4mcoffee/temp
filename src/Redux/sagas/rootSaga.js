import { all } from 'redux-saga/effects'
import {
  usersSaga,
  widgetBarSaga,
  authSaga,
  eventPluseSaga,
  mediaSignalSaga,
  sentimentSignalSaga,
  currenciesSaga,
} from './index'

export function* rootSaga() {
  yield all([
    usersSaga(),
    currenciesSaga(),
    widgetBarSaga(),
    authSaga(),
    eventPluseSaga(),
    mediaSignalSaga(),
    sentimentSignalSaga(),
  ])
}
