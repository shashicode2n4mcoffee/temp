import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import Dashboard from './Pages/Dashboard'
import { fetchCurrenciesRequest } from './Redux/actions/currenciesActions'
import { URLS, URL_CONTEXT } from './Configs/urls'
import ProtectedRoute from './Components/ProtectedRoute'
import Login from './Pages/login'
import { getSessionStorage } from './Utils/sessionStorage'
import { fetchLoginRequest } from './Redux/actions/authActions'

const App = ({ fetchCurrencies, currencies, auth, fetchLoginRequest }) => {
  useEffect(() => {
    const userDetails = getSessionStorage('userDetails')
    fetchLoginRequest(userDetails)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute isLoggedIn={!auth?.user?.email_verified}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.authCredientials,
  currencies: state.currencies?.data,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchCurrencies: fetchCurrenciesRequest,
  fetchLoginRequest: fetchLoginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
