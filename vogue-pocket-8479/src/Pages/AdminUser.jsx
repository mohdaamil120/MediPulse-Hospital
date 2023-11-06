import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./Admin.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input ,Box, Button, Text} from "@chakra-ui/react";
import { addNewUser, getUsers } from '../Redux/adminReducer/action';



export default function AdminUser({setIsAddingUser,searchQuery}) {

  const users = useSelector(state => state.AdminReducer.users);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({ name: '', email: '', password: '' });

  const addUser= () => {
    // Send the newUserData to your API (you need to implement this)
    // After successfully adding the user, you can close the modal and update the user list
    dispatch(addNewUser(newUserData))
    setIsAddingUser(prev=>!prev)

    closeModal();
  };
  

  const openModal = () => {

    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  


  return (
    <div>
         <Box borderRadius="10px" bg="#212529">
        <Text paddingTop="10px" paddingBottom="10px" color="white" fontSize="4xl" mb={4} fontWeight="bold">
            Admin Users
        </Text>
      </Box>
        <div className="right-container">
        <div className="info-new-user-button">
            <h1>User Details</h1>
            <Button onClick={openModal}
            colorScheme="teal"
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
            >
            <div   className="inside-button"
               style={ {color:"white",textDecoration:"none", paddingTop:"15px"}} > <p>Add New User</p>
            </div>
            </Button>
        </div>

        {/* <!-- user table --> */}

         {/* Add the modal for adding a new hotel */}
           

        <div className="user-table">
            <div className="search-card">
            <div className="serach-icon">
                <i className="fas fa-search" style={{ color: "#a8a8a8" }}></i>
            </div>
            <input
                type="text"
                placeholder="Search user..."
                id="search-user-data"
                value={searchQuery}
                // onChange={handleSearchInputChange}
            />
            </div>

            {/* <!-- actual table --> */}
            <table>
            <thead className="heading">
                <tr className="head-row">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody className="body-container">
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <button className='edit' >Edit</button>
                        </td>
                        <td>
                            <button className='delete' >Delete</button>
                        </td>
                    </tr>
                ))}
               
            </tbody>
            </table>
            <div className="pagination"></div>
        </div>
        </div>
        
            <div>

                {/* Chakra UI Modal */}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Input
                        type="text"
                        name="name"
                        value={newUserData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                    <Input
                        type="text"
                        name="email"
                        value={newUserData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    <Input
                        type="text"
                        name="password"
                        value={newUserData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                    />
                    </ModalBody>
                    <ModalFooter>
                    <Button colorScheme="teal" mr={3} onClick={addUser}>
                        Add User
                    </Button>
                    <Button onClick={closeModal}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>
            </div>
          
   
    </div>

  )
}
