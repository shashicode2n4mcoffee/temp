import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST } from '../types'
import api from '../../Api'
import {
  fetchWidgetBarSelectedSymbolFailure,
  fetchWidgetBarSelectedSymbolSuccess
} from '../actions/widgetBarActions'

function* fetchWidgetSelectedSymbol (payload) {
  try {
    yield put(fetchWidgetBarSelectedSymbolSuccess(payload.payload))
  } catch (error) {
    yield put(fetchWidgetBarSelectedSymbolFailure(error.message))
  }
}

function* widgetBarSaga () {
  console.log('FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST SAGA')
  yield takeEvery(
    FETCH_WIDGETDETAILS_SELECTED_SYMBOL_REQUEST,
    fetchWidgetSelectedSymbol
  )
}

export default widgetBarSaga
