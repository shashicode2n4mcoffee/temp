import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import Dashboard from './Pages/Dashboard'
// import LoginForm from './Pages/login'
// import ProtectedRoute from './Components/ProtectedRoute'
import { useEffect } from 'react'
import { fetchCurrenciesRequest } from './Redux/actions/currenciesActions'

const App = ({ fetchCurrencies }) => {
  useEffect(() => {
    fetchCurrencies()
  }, [])
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
