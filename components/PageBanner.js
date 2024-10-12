import React from 'react';
import { Box, Typography } from '@mui/material';

const PageBanner = ({ title, imageUrl }) => {
  return (
    <Box
      sx={{
        position: 'relative',
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
      {/* Transparent Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black background with 50% opacity
          zIndex: 1, // Ensures the overlay is between the background and text
        }}
      />

      {/* Banner Title */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          position: 'relative', // Ensures text appears above the overlay
          zIndex: 2,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageBanner;
