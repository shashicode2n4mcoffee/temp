import {
  FETCH_EVENT_PULSE_REQUEST,
  FETCH_EVENT_PULSE_SUCCESS,
  FETCH_EVENT_PULSE_FAILURE,
} from '../types'

export const fetchEventPluseRequest = (data) => ({
  type: FETCH_EVENT_PULSE_REQUEST,
  payload: data,
})

export const fetchEventPluseSuccess = (data) => ({
  type: FETCH_EVENT_PULSE_SUCCESS,
  payload: data,
})

export const fetchEventPluseFailure = (error) => ({
  type: FETCH_EVENT_PULSE_FAILURE,
  payload: error,
})
