import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchLoginSuccess, fetchLoginFailure } from '../actions/authActions'
import { FETCH_LOGIN_REQUEST } from '../types'
import api from '../../Api'

function* fetchLogin() {
  try {
    // const response = yield call(api.get, '/users')
    const response = { data: '' }
    response.data = { username: 'shashi', password: '1234' }
    yield put(fetchLoginSuccess(response.data))
  } catch (error) {
    yield put(fetchLoginFailure(error.message))
  }
}

function* authSaga() {
  yield takeEvery(FETCH_LOGIN_REQUEST, fetchLogin)
}

export default authSaga
