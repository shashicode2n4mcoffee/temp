import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchMediaSignalSuccess,
  fetchMediaSignalFailure,
} from '../actions/mediaSignalActions'
import { FETCH_MEDIA_SIGNAL_REQUEST } from '../types'
import api from '../../Api'

function* fetchMediaSignal(data) {
  console.info('=======DATA IN MEDIA SIGNAL=====', data?.payload?.url)
  try {
    const response = yield call(api.get, data?.payload?.url || '')
    console.info('=====EVENT PULSE IS CALLED')
    // const response = { data: [] }
    yield put(fetchMediaSignalSuccess(response.data))
  } catch (error) {
    yield put(fetchMediaSignalFailure(error.message))
  }
}

function* mediaSignalSaga() {
  yield takeEvery(FETCH_MEDIA_SIGNAL_REQUEST, fetchMediaSignal)
}

export default mediaSignalSaga
