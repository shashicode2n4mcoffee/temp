import React, { useEffect, useState } from 'react'
import { Button, Modal, Box, Typography } from '@mui/material'

const ChartDataModal = ({ open, setOpen, data }) => {
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(open)
  }, [open])

  useEffect(() => {
    console.info('=====EVENT INSIDE THE MODAL====', data)
  }, [data])

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            maxWidth: 600,
          }}
        >
          <Typography variant='h5' gutterBottom>
            {data?.title}
          </Typography>
          <Typography variant='body1'>{data?.summary}</Typography>
          <Box sx={{ marginTop: '1rem' }}>
            <Button variant='contained' onClick={handleClose}>
              Close
            </Button>
            <Button variant='contained' sx={{ marginLeft: '1rem' }}>
              Like
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ChartDataModal
