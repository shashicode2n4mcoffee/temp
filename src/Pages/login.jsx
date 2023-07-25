// src/components/LoginForm.js
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchLoginRequest } from '../Redux/actions/authActions'

const LoginForm = ({ fetchLoginRequest }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

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
  seletcedSymbol: state.widgetsBar?.seletcedSymbol,
  selectedTime: state.widgetsBar?.selectedTime,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchLoginRequest: fetchLoginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
