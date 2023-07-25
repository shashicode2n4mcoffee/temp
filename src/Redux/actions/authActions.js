import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from '../types'

export const fetchLoginRequest = (data) => ({
  type: FETCH_LOGIN_REQUEST,
  payload: data,
})

export const fetchLoginSuccess = (data) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: data,
})

export const fetchLoginFailure = (error) => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error,
})
