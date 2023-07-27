import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchMediaSignalSuccess,
  fetchMediaSignalFailure,
} from '../actions/mediaSignalActions'
import { FETCH_MEDIA_SIGNAL_REQUEST } from '../types'
import api from '../../Api'

function* fetchMediaSignal() {
  try {
    const url = '/api/data/mediaSignal?fromDate=2023-07-27&toDate=2023-07-28'
    const response = yield call(api.get, url)
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
