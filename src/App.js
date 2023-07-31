import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import Dashboard from './Pages/Dashboard'
// import LoginForm from './Pages/login'
// import ProtectedRoute from './Components/ProtectedRoute'
import { useEffect } from 'react'
import { fetchCurrenciesRequest } from './Redux/actions/currenciesActions'
import { URLS, URL_CONTEXT } from './Configs/urls'

const App = ({ fetchCurrencies, currencies }) => {
  useEffect(() => {
    const data = {
      url: `${URL_CONTEXT.baseContext}${URLS.currencies}`,
    }
    fetchCurrencies(data)
  }, [])

  useEffect(() => {
    console.info('======CURRENCIES======', currencies)
  }, [currencies])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <ProtectedRoute path='/dashboard' component={Dashboard} /> */}
      </Routes>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  currencies: state.currencies?.data,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchCurrencies: fetchCurrenciesRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
