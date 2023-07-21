import {
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE
} from '../types'

const initialState = {
  loading: false,
  seletcedSymbol: 'EURUSD',
  symbolList: [],
  timeFrames: [],
  error: null
}

const widgetBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS:
      return {
        ...state,
        loading: false,
        seletcedSymbol: action.payload
      }
    case FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default widgetBarReducer
