import { all } from 'redux-saga/effects'
import { usersSaga, widgetBarSaga, authSaga, eventPluseSaga } from './index'

export function* rootSaga() {
  yield all([usersSaga(), widgetBarSaga(), authSaga(), eventPluseSaga()])
}
