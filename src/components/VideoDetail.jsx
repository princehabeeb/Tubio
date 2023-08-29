import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] =  useState(null);
  const { id } = useParams();

  useEffect(() => {
   fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
   .then((data) => {

   })
  }, [id])


  return (
    <Box minHeight='95vh' direction={{ xs: 'column', md: 'row' }}>
      <Stack>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top:'86px'}}>
            <ReactPlayer />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail