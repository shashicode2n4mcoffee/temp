import { all } from 'redux-saga/effects'
import { usersSaga } from '../sagas'

export function* rootSaga () {
  yield all([usersSaga()])
}
