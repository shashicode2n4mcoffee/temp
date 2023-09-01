import React from 'react'
import { Container, Grid } from '@mui/material'
import CardComponent from './Card'

const Widget = ({ children, childTitle }) => {
  return (
    <Container
      maxWidth='100%'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      style={{ padding: '0.5rem', paddingBottom: '0' }}
    >
      <CardComponent childTitle={childTitle}>{children}</CardComponent>
    </Container>
  )
}

export default Widget
