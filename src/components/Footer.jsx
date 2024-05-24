import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const FooterContainer = styled('footer')({
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px',
  textAlign: 'center',
  bottom: 0,
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body1">
        Made with <span role="img" aria-label="heart">❤️</span> by Aman Sinha
      </Typography>
    </FooterContainer>
  );
}

export default Footer;
