import React from 'react';
import { Box, Typography, Grid, List, ListItem } from '@mui/material';

const HospitalStaff = ({ imageFirst }) => {
  return (
    <Box p={4}>
      <Grid container spacing={2} alignItems="center">
        {imageFirst ? (
          <>
            <Grid item xs={12} sm={6}>
              <img
                src="https://media.istockphoto.com/id/998313080/photo/smiling-medical-team-standing-together-outside-a-hospital.jpg?s=612x612&w=0&k=20&c=fXzbjAoStQ_8jTM4TQxbHBEjhETI3vq5_7d_JL19eCA="
                alt="Hospital Doctors"
                style={{ maxWidth: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                Our Doctors
              </Typography>
              <Typography variant="body1">
              Our hospital's dedicated doctors provide top-tier care with expertise and compassion. 
              They use advanced technology, stay up-to-date with medical advancements, and are committed to patient education. 
              In their capable hands, you receive the best care and support for your health journey.
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                Our Facilities and Technology
              </Typography>
              <Typography variant="body1">
              At MediPulse, we prioritize delivering healthcare in a state-of-the-art environment, equipped with the latest advancements in medical technology and a range of specialized facilities. 
              Our commitment to providing exceptional patient care is reflected in our modern infrastructure and investment in cutting-edge medical equipment.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src="https://vijayahospital.org/wp-content/uploads/2023/01/vh-1.jpg"
                alt="Facilities and Technology"
                style={{ maxWidth: '100%' }}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default HospitalStaff;
