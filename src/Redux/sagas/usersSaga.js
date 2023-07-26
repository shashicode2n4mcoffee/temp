import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure } from '../actions/usersActions'
import { FETCH_USERS_REQUEST } from '../types'
import api from '../../Api'

function* fetchUsers() {
  try {
    const response = yield call(api.post, '/users', {})
    yield put(fetchUsersSuccess(response.data))
  } catch (error) {
    yield put(fetchUsersFailure(error.message))
  }
}

function* usersSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers)
}

export default usersSaga
