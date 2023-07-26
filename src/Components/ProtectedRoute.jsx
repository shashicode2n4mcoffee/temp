import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, auth, path }) => {
  return (
    <>
      {!auth?.username ? (
        <Navigate to={{ pathname: path }} replace={true} />
      ) : (
        <Component />
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.authCredientials,
})

export default connect(mapStateToProps)(ProtectedRoute)
