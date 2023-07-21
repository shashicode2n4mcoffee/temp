import { call, put, takeEvery } from 'redux-saga/effects'
import {
  FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
  FETCH_WIDGETDETAILS_SELECTED_TIME_REQUEST
} from '../types'
import api from '../../Api'
import {
  fetchWidgetBarSelectedSymbolFailure,
  fetchWidgetBarSelectedSymbolSuccess,
  fetchWidgetBarSelectedTimeFailure,
  fetchWidgetBarSelectedTimeSuccess
} from '../actions/widgetBarActions'

function* fetchWidgetSelectedSymbol (payload) {
  try {
    yield put(fetchWidgetBarSelectedSymbolSuccess(payload.payload))
  } catch (error) {
    yield put(fetchWidgetBarSelectedSymbolFailure(error.message))
  }
}

function* fetchWidgetSelectedTime (payload) {
  console.info('=====TIME SAGA====', payload)
  try {
    yield put(fetchWidgetBarSelectedTimeSuccess(payload.payload.time))
  } catch (error) {
    yield put(fetchWidgetBarSelectedTimeFailure(error.message))
  }
}

function* widgetBarSaga () {
  yield takeEvery(
    FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
    fetchWidgetSelectedSymbol
  )

  yield takeEvery(
    FETCH_WIDGETDETAILS_SELECTED_TIME_REQUEST,
    fetchWidgetSelectedTime
  )
}

export default widgetBarSaga
