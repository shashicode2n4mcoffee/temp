import {
  FETCH_MEDIA_SIGNAL_REQUEST,
  FETCH_MEDIA_SIGNAL_SUCCESS,
  FETCH_MEDIA_SIGNAL_FAILURE,
} from '../types'

export const fetchMediaSignalRequest = (data) => ({
  type: FETCH_MEDIA_SIGNAL_REQUEST,
  payload: data,
})

export const fetchMediaSignalSuccess = (data) => ({
  type: FETCH_MEDIA_SIGNAL_SUCCESS,
  payload: data,
})

export const fetchMediaSignalFailure = (error) => ({
  type: FETCH_MEDIA_SIGNAL_FAILURE,
  payload: error,
})
