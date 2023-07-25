// src/components/ProtectedRoute.js
import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, authCredientials, path }) => {
  const navigate = useNavigate()
  if (!authCredientials?.username) {
    navigate('/')
    return null
  }

  // If authenticated, render the component.
  // return <Component {...rest} />
  return <Route path={path} element={Component} />
}

const mapStateToProps = (state) => ({
  auth: state.auth.authCredientials,
})

export default connect(mapStateToProps)(ProtectedRoute)
