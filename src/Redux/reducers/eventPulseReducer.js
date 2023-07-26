import {
  FETCH_EVENT_PULSE_REQUEST,
  FETCH_EVENT_PULSE_SUCCESS,
  FETCH_EVENT_PULSE_FAILURE,
} from '../types'

const initialState = {
  loading: false,
  eventPulse: {},
  error: null,
}

const eventPulseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_PULSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_EVENT_PULSE_SUCCESS:
      return {
        ...state,
        loading: false,
        eventPulse: action.payload,
      }
    case FETCH_EVENT_PULSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default eventPulseReducer
