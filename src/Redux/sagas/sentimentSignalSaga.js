import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchSentimentSignalSuccess,
  fetchSentimentSignalFailure,
} from '../actions/sentimentSignalActions'
import { FETCH_SENTIMENT_SIGNAL_REQUEST } from '../types'
import api from '../../Api'

function* fetchSentimentSignal() {
  try {
    const url =
      '/api/data/sentimentSignal?fromDate=2023-07-27&toDate=2023-07-28'
    const response = yield call(api.get, url)
    yield put(fetchSentimentSignalSuccess(response.data))
  } catch (error) {
    yield put(fetchSentimentSignalFailure(error.message))
  }
}

function* sentimentSignalSaga() {
  yield takeEvery(FETCH_SENTIMENT_SIGNAL_REQUEST, fetchSentimentSignal)
}

export default sentimentSignalSaga
