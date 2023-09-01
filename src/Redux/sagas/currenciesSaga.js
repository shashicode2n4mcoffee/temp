// import { call, put, takeLatest } from 'redux-saga/effects'
// import {
//   fetchCurrenciesSuccess,
//   fetchCurrenciesFailure,
// } from '../actions/currenciesActions'
// import { FETCH_CURRENCIES_REQUEST } from '../types'
// import api from '../../Api'

// function* fetchCurrencies(data) {
//   try {
//     const response = yield call(api.get, data?.payload?.url || '')
//     yield put(fetchCurrenciesSuccess(response.data))
//   } catch (error) {
//     yield put(fetchCurrenciesFailure(error.message))
//   }
// }

// function* currenciesSaga() {
//   yield takeLatest(FETCH_CURRENCIES_REQUEST, fetchCurrencies)
// }

// export default currenciesSaga

import { call, put, takeLatest, cancel, fork } from 'redux-saga/effects'
import {
  fetchCurrenciesSuccess,
  fetchCurrenciesFailure,
} from '../actions/currenciesActions'
import { FETCH_CURRENCIES_REQUEST } from '../types'
import api from '../../Api'

function* fetchCurrencies(data) {
  try {
    const response = yield call(api.get, data?.payload?.url || '')
    yield put(fetchCurrenciesSuccess(response.data))
  } catch (error) {
    yield put(fetchCurrenciesFailure(error.message))
  }
}

function* currenciesSaga() {
  let task
  yield takeLatest(FETCH_CURRENCIES_REQUEST, function* (action) {
    if (task) {
      yield cancel(task) // Cancel previous task
    }
    task = yield fork(fetchCurrencies, action)
  })
}

export default currenciesSaga
