import '../Styles/Modal.scss'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Box, Typography } from '@mui/material'
import moment from 'moment'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import SimilarNewsModal from './SimilarNews'

const summary = [
  'Indian shares rise as Reliance, metal stocks help outweigh weak IT',
  'India stocks, rupee, swaps, call at 10:00 a.m. IST',
]

const MediaSignalModal = ({ open, setOpen, data }) => {
  const [showSimilarNews, setShowSimilarNews] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    setShowSimilarNews(false)
  }, [open])

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(open)
  }, [open])

  const handleShowSimilarNews = () => {
    setShowSimilarNews(true)
  }

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#374151',
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            maxWidth: 600,
            color: 'white',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '2rem',
              right: '1rem',
              cursor: 'pointer',
            }}
            onClick={handleClose}
          >
            <HighlightOffIcon style={{ color: '#6B7280' }} />
          </Box>
          <Typography variant='h6' gutterBottom>
            {data?.title}
          </Typography>
          <Box display='flex' justifyContent='flex-start'>
            <Typography
              variant='subtitle2'
              gutterBottom
              color='#9CA3AF'
              sx={{ paddingRight: '1rem' }}
            >
              {moment(data?.time).format('DD MMM YYYY HH:MM')}
            </Typography>
            {!showSimilarNews && data?.summary && (
              <Typography
                variant='body2'
                color='primary'
                onClick={handleShowSimilarNews}
                sx={{ cursor: 'pointer' }}
              >
                Show Similar News
              </Typography>
            )}
          </Box>
          {!showSimilarNews ? (
            data?.summary
              ?.split('.')
              ?.map((item, index) => <li key={index}> {item}</li>)
          ) : (
            <SimilarNewsModal summary={data?.summary} />
          )}
        </Box>
      </Modal>
    </div>
  )
}

export default MediaSignalModal
