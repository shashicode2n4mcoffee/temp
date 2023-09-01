import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
} from '../types'

const initialState = {
  loading: false,
  data: ['EURUSD'],
  error: null,
}

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default currenciesReducer
