// src/components/LoginForm.js
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchLoginRequest } from '../Redux/actions/authActions'

const LoginForm = ({ fetchLoginRequest, auth }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    auth?.username && navigate('/dashboard')
    console.log('=====AUTH IN LOGIN====', auth)
  }, [auth])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchLoginRequest(formData)
    // dispatch(login(formData))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth?.authCredientials,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchLoginRequest: fetchLoginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
