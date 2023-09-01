import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import store from './Redux/store/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: 14, // Add the desired font size
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        limit={1}
      />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
