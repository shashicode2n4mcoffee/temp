import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
} from '../types'

export const fetchCurrenciesRequest = (data) => ({
  type: FETCH_CURRENCIES_REQUEST,
  payload: data,
})

export const fetchCurrenciesSuccess = (data) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: data.map((item) => item.currencyPair.replace(/-/g, '')),
})

export const fetchCurrenciesFailure = (error) => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: error,
})
