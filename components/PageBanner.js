// Banner.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const PageBanner = ({ title }) => {
    const imageUrl = '/images/page_banner.jpg'
  return (
    <Box
      sx={{
        height: '50vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageBanner;
