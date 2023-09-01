import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchLoginRequest } from '../Redux/actions/authActions'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { setSessionStorage } from '../Utils/sessionStorage'
import { Grid, Typography, Box } from '@mui/material'

const LoginForm = ({ fetchLoginRequest, user }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_AUTH_CLIENTID
  const navigate = useNavigate()

  const onHandleSuccess = (response) => {
    const userDetails = {
      user: jwt_decode(response.credential),
      token: response.credential,
    }
    fetchLoginRequest(userDetails)
    setSessionStorage('userDetails', userDetails)
  }

  useEffect(() => {
    if (user?.authCredientials?.user?.email_verified) {
      navigate('/dashboard')
    }
    console.log('GOOGLE DETAILS : ', {
      clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENTID,
      user: user,
    })
  }, [user])

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      style={{
        minHeight: '100vh',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1461887046916-c7426e65460d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <Grid
        item
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '5rem',
            left: '5rem',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 72 72'
            fill='none'
          >
            <path
              d='M56.2108 17.0518L42.6317 17.3675H42.3159L16.4209 55.2623H29.6842L56.2108 17.0518Z'
              fill='#F3F4F6'
            />
            <rect
              x='3.71203'
              y='3.71203'
              width='64.5757'
              height='64.575'
              stroke='#F3F4F6'
              stroke-width='7.42504'
            />
          </svg>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '1rem',
            }}
          >
            <Typography
              variant='h2'
              color='white'
              fontWeight='bold'
              sx={{
                backgroundImage: 'linear-gradient(9deg, #0C8CE9, #B660FA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline',
              }}
            >
              DB
            </Typography>
            <Typography variant='h2' color='white' fontWeight='normal'>
              Colours
            </Typography>
          </Box>
        </Box>
        <Box>
          <GoogleOAuthProvider clientId={apiKey}>
            <GoogleLogin
              onSuccess={(response) => onHandleSuccess(response)}
              onError={(error) => {
                console.log(error)
              }}
            />
          </GoogleOAuthProvider>
        </Box>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchLoginRequest: fetchLoginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
