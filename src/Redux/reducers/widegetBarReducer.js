import { CURRENCIES } from '../../Configs/currencies'
import { TIMEFRAME } from '../../Configs/timeframe'
import { WIDGET_ITEMS } from '../../Configs/widget-items'
import {
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE,
  FETCH_WIDGETDETAILS_SELECTED_TIME_SUCCESS,
  FETCH_WIDGETDETAILS_SELECTED_TIME_FAILURE,
} from '../types'

const initialState = {
  loading: false,
  seletcedSymbol: CURRENCIES[0],
  selectedTime: TIMEFRAME[0],
  symbolList: CURRENCIES,
  timeFrames: TIMEFRAME,
  error: null,
  widgetList: WIDGET_ITEMS,
}

const widgetBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS:
      return {
        ...state,
        loading: false,
        seletcedSymbol: action.payload,
      }
    case FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_WIDGETDETAILS_SELECTED_TIME_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedTime: action.payload,
      }
    case FETCH_WIDGETDETAILS_SELECTED_TIME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default widgetBarReducer
