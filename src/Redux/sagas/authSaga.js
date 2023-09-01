import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchLoginSuccess, fetchLoginFailure } from '../actions/authActions'
import { FETCH_LOGIN_REQUEST } from '../types'
import api from '../../Api'

function* fetchLogin(data) {
  try {
    yield put(fetchLoginSuccess(data.payload))
  } catch (error) {
    yield put(fetchLoginFailure(error.message))
  }
}

function* authSaga() {
  yield takeEvery(FETCH_LOGIN_REQUEST, fetchLogin)
}

export default authSaga
