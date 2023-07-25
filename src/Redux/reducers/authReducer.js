import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from '../types'

const initialState = {
  loading: false,
  authCredientials: {},
  error: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authCredientials: action.payload,
      }
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
