// src/redux/usersSaga.js
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { fetchUsersSuccess, fetchUsersFailure } from '../actions/usersActions'
import { FETCH_USERS_REQUEST } from '../types'

function* fetchUsers () {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    )
    yield put(fetchUsersSuccess(response.data))
  } catch (error) {
    yield put(fetchUsersFailure(error.message))
  }
}

function* usersSaga () {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers)
}

export default usersSaga
