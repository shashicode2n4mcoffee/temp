import { call, put, takeEvery } from 'redux-saga/effects'
import {
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  FETCH_WIDGETDETAILS_SELECTED_TIME_REQUEST,
  UPDATE_WIDGETDETAILS_WIDGET_LIST_REQUEST,
} from '../types'
import api from '../../Api'
import {
  fetchWidgetBarSelectedSymbolFailure,
  fetchWidgetBarSelectedSymbolSuccess,
  fetchWidgetBarSelectedTimeFailure,
  fetchWidgetBarSelectedTimeSuccess,
  updateWidgetBarWidgetListFailure,
  updateWidgetBarWidgetListSuccess,
} from '../actions/widgetBarActions'

function* fetchWidgetSelectedSymbol(payload) {
  try {
    yield put(fetchWidgetBarSelectedSymbolSuccess(payload.payload))
  } catch (error) {
    yield put(fetchWidgetBarSelectedSymbolFailure(error.message))
  }
}

function* fetchWidgetSelectedTime(payload) {
  try {
    yield put(fetchWidgetBarSelectedTimeSuccess(payload.payload))
  } catch (error) {
    yield put(fetchWidgetBarSelectedTimeFailure(error.message))
  }
}

function* updateWidgetWidgetList(payload) {
  try {
    yield put(updateWidgetBarWidgetListSuccess(payload.payload))
  } catch (error) {
    yield put(updateWidgetBarWidgetListFailure(error.message))
  }
}

function* widgetBarSaga() {
  yield takeEvery(
    FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
    fetchWidgetSelectedSymbol
  )

  yield takeEvery(
    FETCH_WIDGETDETAILS_SELECTED_TIME_REQUEST,
    fetchWidgetSelectedTime
  )

  yield takeEvery(
    UPDATE_WIDGETDETAILS_WIDGET_LIST_REQUEST,
    updateWidgetWidgetList
  )
}

export default widgetBarSaga
