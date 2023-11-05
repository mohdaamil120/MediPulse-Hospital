import React from 'react';
import { Box, Container } from '@mui/material';
import AboutInfo from '../Components/AboutInfo';
import HospitalStaff from '../Components/HospitalStaff';


const AboutPage = () => {
  return (
    <Container>
      <Box mt={6}>
        <AboutInfo imageFirst={true} />
        <AboutInfo imageFirst={false} />
        <HospitalStaff imageFirst={true} />
        <HospitalStaff imageFirst={false} />
      </Box>
    </Container>
  );
};

export default AboutPage;
