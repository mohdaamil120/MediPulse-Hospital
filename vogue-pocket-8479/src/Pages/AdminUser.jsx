import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./Admin.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,} from '@fortawesome/free-solid-svg-icons';
import {Box, Button, Text} from "@chakra-ui/react";



export default function AdminUser({setIsAddingHotel,searchQuery}) {

  const users = useSelector(state => state.AdminReducer.users);
  const dispatch = useDispatch();


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
            <Button onClick={() => setIsAddingHotel(true)}
            colorScheme="teal"
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
            >
            <div className="inside-button">
               <Link style={ {color:"white",textDecoration:"none", paddingTop:"15px"}} to={"/addhotel"}> <p>Add New User</p></Link>
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
                {/* <tr>
                        <td>Aamil</td>
                        <td>aamil120</td>
                        <td>mohdaamil120@gmail.com</td>
                        <td>12345</td>
                        <td>
                            <button className='edit' >Edit</button>
                        </td>
                        <td>
                            <button className='delete' >Delete</button>
                        </td>
                    </tr> */}
            </tbody>
            </table>
            <div className="pagination"></div>
        </div>
        </div>
    </div>
  )
}
