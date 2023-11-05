import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const AboutInfo = ({ imageFirst }) => {
  return (
    <Box p={4}>
      <Grid container spacing={2} alignItems="center">
        {imageFirst ? (
          <>
            <Grid item xs={12} sm={6}>
              <img
                src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo="
                alt="Hospital Image"
                style={{ maxWidth: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                About Our Hospital
              </Typography>
              <Typography variant="body1">
                Welcome to MediPulse, where compassionate care meets advanced medical expertise. At MediPluse, we are committed to providing exceptional healthcare services that prioritize your well-being and comfort. Our mission is to deliver accessible, compassionate, and high-quality healthcare to our community, placing your health at the forefront of everything we do.
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                Our Mission & Visson
              </Typography>
              <Typography variant="body1">
                Our mission at MediPulse is to provide accessible, compassionate, and high-quality healthcare to enhance the well-being of our community. We strive to deliver personalized, patient-centric care that meets the diverse needs of individuals and families, ensuring their comfort, trust, and confidence in our services.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src="https://viso.ai/wp-content/uploads/2021/08/computer-vision-in-healthcare.jpg"
                alt="Mission and Vision"
                style={{ maxWidth: '100%' }}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default AboutInfo;
