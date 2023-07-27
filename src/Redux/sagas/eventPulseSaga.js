import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_EVENT_PULSE_REQUEST } from '../types'
import api from '../../Api'
import {
  fetchEventPluseFailure,
  fetchEventPluseSuccess,
} from '../actions/eventPulseActions'

function* fetchEventPulse() {
  try {
    const url = '/api/data/eventPulse?date=2023-07-27'
    // const url = '/users'

    const response = yield call(api.get, url)
    console.info('=====EVENT PULSE IS CALLED')
    // const response = { data: '' }
    // response.data = { username: 'shashi', password: '1234' }
    yield put(fetchEventPluseSuccess(response.data))
  } catch (error) {
    yield put(fetchEventPluseFailure(error.message))
  }
}

function* eventPluseSaga() {
  console.info('=====EVENT PULSE IS CALLED 1')
  yield takeEvery(FETCH_EVENT_PULSE_REQUEST, fetchEventPulse)
}

export default eventPluseSaga
