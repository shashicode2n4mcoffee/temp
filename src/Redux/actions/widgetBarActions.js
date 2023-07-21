import {
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE
} from '../types'

export const fetchWidgetBarSelectedSymbolRequest = data => ({
  type: FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  payload: data
})

export const fetchWidgetBarSelectedSymbolSuccess = details => ({
  type: FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS,
  payload: details
})

export const fetchWidgetBarSelectedSymbolFailure = error => ({
  type: FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE,
  payload: error
})
