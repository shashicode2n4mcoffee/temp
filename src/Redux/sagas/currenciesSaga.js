import { call, put, takeEvery } from 'redux-saga/effects'
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
  yield takeEvery(FETCH_CURRENCIES_REQUEST, fetchCurrencies)
}

export default currenciesSaga
