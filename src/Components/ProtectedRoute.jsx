import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children, isLoggedIn }) => {
  const navigate = useNavigate()
  if (isLoggedIn) {
    navigate('/')
    return null
  }

  return children
}

export default ProtectedRoute
