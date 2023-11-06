import logo from "../Images/logo.png"
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link, useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch } from 'react-redux'
import "./Admin.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowLeft, faPlus, faChartBar, faUserMd, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {Button} from "@chakra-ui/react";
import AdminUser from "./AdminUser"
import AdminDashboard from "./AdminDashboard"
import AdminDoctor from "./AdminDoctor"
import { getDoctors, getUsers } from "../Redux/adminReducer/action"
// import AdminDashboard from "./AdminDashboard"

const initialState =  {
    name: "",
    email: "",
    password: "",
    userDetails: []
}

export default function Admin() {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddingUser, setIsAddingUser] = useState(false);
    const [newUser, setNewUser] = useState(initialState);
    
    const [dashboard, setDashboard] = useState(true)
    const [doctors, setDoctors] = useState(false)
    const [user, setUser] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getDoctors)
        dispatch(getUsers)
    },[isAddingUser])

    const handleDashboad = ()=>{
        if(dashboard){
            return 
        }
        else {

            setDashboard(prev => !prev)
        }
    }
    
    const handleUser = ()=>{
        // setDashboard(prev => !prev)
        if(user){
            setDashboard(false)
            setDoctors(false)
        }
        else{
            setUser(prev => !prev)
        }
    }
    const handleDoctors = ()=>{
        // setDashboard(prev => !prev)
        if(doctors){
            setDashboard(false)
            setUser(false)
        }
        else{
            setDoctors(prev => !prev)
        }
    }

    // let {loginData,isAuth} = useSelector((store) => {
    //     return{
    //     loginData : store.authReducer.loginData,
    //     isAuth : store.authReducer.isAuth
    //     }
    //   },shallowEqual)
    
   
    // const handleLogout = () => {
        
    // }

    // const handleDeleteUser = (userId) => {
    //     dispatch(deleteUser(userId))
    // }
    
    // const handleEditUser = (user) => {
    //     dispatch(editUser(user))
    // }
  

    //  // Filtered user data based on search query
    // const filteredUserData = loginData.filter((user) =>
    // user.userName.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // // Function to handle search input change
    // const handleSearchInputChange = (e) => {
    // setSearchQuery(e.target.value);
    // };

    //  ///console.log(isAuth)
    //  useEffect(()=>{
    //     console.log("yes")
    //     dispatch(getUserData)
    //   },[isAuth,loginData])



    return (
    <div className="main-outer-container">

        {/* <!-- left container --> */}
        <div className="left-container">
        <div className="logo-container">
            <img src={logo} alt="logo" />
        </div>

        <div className="admin-card">
            <div className="admin-image-container">
            <img src="data:image/jpeg;base64,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" alt="admin image" />
            </div>
            <h4>MediPulse Admin</h4>
        </div>

        <div className="admin-options">
            <div onClick={handleDashboad} className="user-card">
                <div  className="user-icon">
                <FontAwesomeIcon color='black' icon={faChartBar} /> 
                </div>
                <p > Dashboard </p>
            </div>
            <div  onClick={handleUser} className="user-card">
                <div  className="user-icon">
                <FontAwesomeIcon color='black' icon={faUser} /> 
                </div>
                <p> User</p>
            </div>
            <div onClick={handleDoctors} className="user-card">
                <div  className="user-icon">
                <FontAwesomeIcon color='black' icon={faUserMd} /> 
                </div>
                <p> Doctors</p>
            </div>

            <div className="destination-card">
                <div className="destination-icon">
                <FontAwesomeIcon color='black' icon={faSignOutAlt} /> 
                </div>
                <p onClick={()=> navigate("/")} >Logout</p>
            </div>
            {/* style={ {fontSize:"20px",color:"gray",textDecoration:"none"}} to={"/"} */}
        </div>
        </div>
        {/* <!-- end of left container --> */}


        {/* <!-- right container --> */}
        
        {
            dashboard ? (
              <AdminDashboard/> 
            ) : user ? (
                <AdminUser setIsAddingUser={setIsAddingUser} searchQuery={searchQuery}/>
            ) :(
                <AdminDoctor setIsAddingUser={setIsAddingUser}/>
            )
        }
        {/* <!-- end of right container --> */}

       
  </div>
  )

}







