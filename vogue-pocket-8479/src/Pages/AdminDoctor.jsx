import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addDoctor, editDoctor, deleteDoctor } from './doctorsActions';
import { Box, Button, Input, Text, VStack, Stack, Image, Grid, HStack } from '@chakra-ui/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminDoctor = ({setIsAddingHotel}) => {
  const doctors = useSelector(state => state.AdminReducer.doctors);
  const dispatch = useDispatch();

  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '' });

  const handleAddDoctor = () => {
    // You can dispatch the addDoctor action here with newDoctor
    // Example: dispatch(addDoctor({ ...newDoctor, id: Date.now() }));

    // For now, we'll log the newDoctor data to the console
    // console.log('Adding Doctor:', newDoctor);
    // setNewDoctor({ name: '', specialty: '' });
  };

  const handleEditDoctor = doctor => {
    // Implement editing functionality here
    // Example: dispatch(editDoctor({ id: doctor.id, name: 'Updated Name', specialty: 'Updated Specialty' }));

    // For now, we'll log the doctor data to the console
    // console.log('Editing Doctor:', doctor);
  };

  const handleDeleteDoctor = doctorId => {
    // dispatch(deleteDoctor(doctorId));
  };

  return (
    <CARDGRID>
        <Box borderRadius="10px" bg="#212529">
        <Text paddingTop="10px" paddingBottom="10px" color="white" fontSize="4xl" mb={4} fontWeight="bold">
            Admin Doctors
        </Text>
      </Box>

      <div id='search' style={ {display:"flex",justifyContent:"space-between",marginBottom:"10px", textAlign:"right"}} className="info-new-user-button">
               <input
                style={{width:"100%", height:"50px",paddingLeft:"20px", borderRadius:"50px", fontWeight:"bold",backgroundColor:"#EDEFF1"}}
                type="text"
                placeholder="Search doctor..."
                id="search-user-data"
                // onChange={handleSearchInputChange}
               />
            <Button onClick={() => setIsAddingHotel(true)}
            colorScheme="teal"
            style={ {height:"48px",borderRadius:"50px"}}
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
            >
            <div style={ {paddingTop:"15px",paddingRight:"5px"}} className="inside-button">
               <Link style={ {color:"white",textDecoration:"none",textAlign:"center",paddingTop:"20px"}} to={"/addhotel"}> <p>Add New Doctors</p></Link>
            </div>
            </Button>
        </div>

    <Box maxW="100%" width="1050px" className='card_Wrapper'>
      
     
      <Stack spacing={4} mt={4}  className='card'>
        {doctors?.map(doctor => (
          <Box 
            key={doctor.id}
            p={4}
            paddingLeft="25px"
            // border="3px solid green"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bgColor="white"
            display="flex"
            justifyContent="space-between"
            className='inside_card'
          >
          
           <VStack align="left" spacing={1}>
             <img  src={doctor.image} alt='logo' style={{ width:"200px",height:"150px",borderRadius:"5px"}}/>
              <Text fontWeight="bold">{doctor.name}</Text>
              <Text>{doctor.speciality}</Text>
              <Text>{doctor.education}</Text>
              <Button colorScheme="teal" size="sm" onClick={() => handleEditDoctor(doctor)}>
                 Edit
              </Button>
              <Button colorScheme="red" size="sm" onClick={() => handleDeleteDoctor(doctor.id)}>
                 Delete
              </Button>
              </VStack>
           
          </Box>
        ))}
      </Stack>
      
    </Box>
    </CARDGRID>
  );
};

export default AdminDoctor;

const CARDGRID = styled.div`
   
  .card{
    display: grid;
    grid-template-columns: repeat(4 ,1fr);
    justify-content: space-between;
    gap: 15px;
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
  
    #search{
      display: flex;
      flex-direction: column;
     }

     .card{
      display: grid;
      grid-template-columns: repeat(3 ,1fr);
      gap: 15px;   
     }

     .inside_card {
      margin: auto;
      /* padding-left: 80px; */
     }

  }

  @media screen and (max-width: 800px) {
  
      #search{
        display: flex;
        flex-direction: column;
      }

      .card{
        display: grid;
        grid-template-columns: repeat(2 ,1fr);
        gap: 15px;   
      }

      .inside_card {
        margin: auto;
      }  
  }

    @media screen and (max-width: 500px) {
  
          #search{
            display: flex;
            flex-direction: column;
          }

          .card{
            display: grid;
            grid-template-columns: repeat(1 ,1fr);
            gap: 15px;   
          }

          .inside_card {
            margin: auto;
          }

    }

  
`





 {/* <VStack spacing={4} align="stretch">
        <Input
          placeholder="Name"
          value={newDoctor.name}
          onChange={e => setNewDoctor({ ...newDoctor, name: e.target.value })}
        />
        <Input
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={e => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
        />
        <Button colorScheme="teal" onClick={handleAddDoctor}>
          Add Doctor
        </Button>
      </VStack> */}
    
