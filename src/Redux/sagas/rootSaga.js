import { all } from 'redux-saga/effects'
import { usersSaga, widgetBarSaga } from './index'

export function* rootSaga () {
  yield all([usersSaga(), widgetBarSaga()])
}
