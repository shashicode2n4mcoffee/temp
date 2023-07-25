import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import LoginForm from './Pages/login'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  const appStyle = {
    height: '100vh',
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <ProtectedRoute path='/dashboard' component={Dashboard} /> */}
      </Routes>
    </Router>
  )
}

export default App
