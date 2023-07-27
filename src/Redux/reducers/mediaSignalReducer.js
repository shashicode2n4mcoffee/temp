import {
  FETCH_MEDIA_SIGNAL_REQUEST,
  FETCH_MEDIA_SIGNAL_SUCCESS,
  FETCH_MEDIA_SIGNAL_FAILURE,
} from '../types'

const initialState = {
  loading: false,
  data: [],
  error: null,
}

const mediaSignalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEDIA_SIGNAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_MEDIA_SIGNAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_MEDIA_SIGNAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default mediaSignalReducer
