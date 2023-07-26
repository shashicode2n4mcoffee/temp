import {
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS,
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE,
  FETCH_WIDGETDETAILS_SELECTED_TIME_REQUEST,
  FETCH_WIDGETDETAILS_SELECTED_TIME_SUCCESS,
  FETCH_WIDGETDETAILS_SELECTED_TIME_FAILURE,
  UPDATE_WIDGETDETAILS_WIDGET_LIST_REQUEST,
  UPDATE_WIDGETDETAILS_WIDGET_LIST_SUCCESS,
  UPDATE_WIDGETDETAILS_WIDGET_LIST_FAILURE,
} from '../types'

export const fetchWidgetBarSelectedSymbolRequest = (data) => ({
  type: FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  payload: data,
})

export const fetchWidgetBarSelectedSymbolSuccess = (details) => ({
  type: FETCH_WIDGETDETAILS_SELECTED_SYMBOL_SUCCESS,
  payload: details,
})

export const fetchWidgetBarSelectedSymbolFailure = (error) => ({
  type: FETCH_WIDGETDETAILS_SELECTED_SYMBOL_FAILURE,
  payload: error,
})

export const fetchWidgetBarSelectedTimeRequest = (data) => ({
  type: FETCH_WIDGETDETAILS_SELECTED_TIME_REQUEST,
  payload: data,
})

export const fetchWidgetBarSelectedTimeSuccess = (details) => ({
  type: FETCH_WIDGETDETAILS_SELECTED_TIME_SUCCESS,
  payload: details,
})

export const fetchWidgetBarSelectedTimeFailure = (error) => ({
  type: FETCH_WIDGETDETAILS_SELECTED_TIME_FAILURE,
  payload: error,
})

export const updateWidgetBarWidgetListRequest = (data) => ({
  type: UPDATE_WIDGETDETAILS_WIDGET_LIST_REQUEST,
  payload: data,
})

export const updateWidgetBarWidgetListSuccess = (details) => ({
  type: UPDATE_WIDGETDETAILS_WIDGET_LIST_SUCCESS,
  payload: details,
})

export const updateWidgetBarWidgetListFailure = (error) => ({
  type: UPDATE_WIDGETDETAILS_WIDGET_LIST_FAILURE,
  payload: error,
})
