import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import api from '../Api/index'
import { URLS, URL_CONTEXT } from '../Configs/urls'

const SimilarNewsModal = ({ summary }) => {
  const [similarNewsData, setSimilarNewsData] = useState([])

  useEffect(() => {
    api
      .post(`${URL_CONTEXT.baseContext}${URLS.similarNews}`, { summary })
      .then((data) => setSimilarNewsData(data?.data))
      .catch((e) => console.log('Error : ', e))
  }, [])

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        Similar News
      </Typography>
      {similarNewsData?.map((item, index) => (
        <li key={index}>{item?.title}</li>
      ))}
    </Box>
  )
}

export default SimilarNewsModal
