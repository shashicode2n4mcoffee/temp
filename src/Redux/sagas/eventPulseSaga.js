import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_EVENT_PULSE_REQUEST } from '../types'
import api from '../../Api'
import {
  fetchEventPluseFailure,
  fetchEventPluseSuccess,
} from '../actions/eventPulseActions'

function* fetchEventPulse(data) {
  try {
    const response = yield call(api.get, data?.payload?.url || '')
    yield put(fetchEventPluseSuccess(response.data))
  } catch (error) {
    yield put(fetchEventPluseFailure(error.message))
  }
}

function* eventPluseSaga() {
  yield takeEvery(FETCH_EVENT_PULSE_REQUEST, fetchEventPulse)
}

export default eventPluseSaga
