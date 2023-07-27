import {
  FETCH_SENTIMENT_SIGNAL_REQUEST,
  FETCH_SENTIMENT_SIGNAL_SUCCESS,
  FETCH_SENTIMENT_SIGNAL_FAILURE,
} from '../types'

export const fetchSentimentSignalRequest = (data) => ({
  type: FETCH_SENTIMENT_SIGNAL_REQUEST,
  payload: data,
})

export const fetchSentimentSignalSuccess = (data) => ({
  type: FETCH_SENTIMENT_SIGNAL_SUCCESS,
  payload: data,
})

export const fetchSentimentSignalFailure = (error) => ({
  type: FETCH_SENTIMENT_SIGNAL_FAILURE,
  payload: error,
})
