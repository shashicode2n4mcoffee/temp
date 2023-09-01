import '../Styles/Modal.scss'
import React, { useEffect, useState } from 'react'
import {
  Button,
  Modal,
  Box,
  Typography,
  IconButton,
  Stack,
  ButtonGroup,
} from '@mui/material'
import moment from 'moment'
import LaunchIcon from '@mui/icons-material/Launch'
import {
  ThumbUp,
  ThumbDown,
  Bookmark,
  Comment,
  Share,
} from '@mui/icons-material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const summary = [
  'Indian shares rise as Reliance, metal stocks help outweigh weak IT',
  'India stocks, rupee, swaps, call at 10:00 a.m. IST',
]

const EventBriefingModal = ({ open, setOpen, data }) => {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const handleLike = () => {
    setLiked(true)
    setDisliked(false)
  }

  const handleDislike = () => {
    setLiked(false)
    setDisliked(true)
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  const handleComment = () => {
    // Implement your comment logic here
  }

  const handleShare = () => {
    // Implement your share logic here
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(open)
  }, [open])

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#111827',
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
          <Typography
            variant='subtitle2'
            gutterBottom
            color='#9CA3AF'
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {moment(data?.time).format('DD MMM YYYY HH:MM')}
            <LaunchIcon style={{ color: '#3B82F6', paddingLeft: '.5rem' }} />
          </Typography>
          <Typography
            variant='subtitle2'
            style={{ paddingTop: '1rem', paddingBottom: '.5rem' }}
          >
            KEY CALLOUTS
          </Typography>
          {summary?.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
          <Box sx={{ marginTop: '1rem' }} className='modal-btns'>
            {/* <Button variant='contained' onClick={handleClose}>
              Close
            </Button> */}
            <ButtonGroup style={{ color: liked ? '#3B82f6' : 'white' }}>
              <Button
                style={{
                  background: 'transparent',
                  border: '.5px solid #374151',
                }}
              >
                <ThumbUpOffAltIcon
                  style={{
                    color: liked ? '#3B82f6' : 'white',
                  }}
                  onClick={handleLike}
                />
              </Button>
              <Button
                style={{
                  background: 'transparent',
                  border: '.5px solid #374151',
                }}
              >
                <ThumbDownOffAltIcon
                  style={{ color: disliked ? '#3B82f6' : 'white' }}
                  onClick={handleDislike}
                />
              </Button>
            </ButtonGroup>
            <Stack direction='row' spacing={1}></Stack>
            <ButtonGroup>
              <Button
                style={{ background: 'transparent', border: 'none' }}
                onClick={handleBookmark}
              >
                <BookmarkBorderIcon
                  style={{ color: bookmarked ? '#3B82f6' : 'white' }}
                />
              </Button>
              <Button
                style={{ background: 'transparent', border: 'none' }}
                onClick={handleComment}
              >
                <ChatBubbleOutlineIcon style={{ color: 'white' }} />
              </Button>
              <Button
                style={{ background: 'transparent', border: 'none' }}
                onClick={handleShare}
              >
                <Share style={{ color: 'white' }} />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default EventBriefingModal
