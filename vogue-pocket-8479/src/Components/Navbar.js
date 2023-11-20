import React, { useState } from "react";
import Logo from "../Assets/Logoo.png";
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Drawer, List, ListItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../Redux/auth/action";
// import "./Navbar.css"; // Import your custom CSS

const Navbar = () => {
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
 const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
    
  const menuOptions = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Book Appointment",
      link: "/doctor",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  // let dispatch  = useDispatch()
  // const handleLogout =()=>{
  //   localStorage.removeItem("token")
  //   navigate("/")
  // }
  // const logout = isAuth? handleLogout :null
  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img onClick={() => navigate("/")} src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
          <Link key={index} to={item.link} className="navbar-link">
            {item.text}
          </Link>
        ))}
        {isAuth ? (
           <Link to="/profile">
            <Button
              bgColor="#009E60"
              color="white"
              className="navbar-button"
            >
              profile
               </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button
              bgColor="white"
              // color="white"
              fontWeight="bold"
              background="transparent"
              className="navbar-button"
            >
              SIGN-IN
            </Button>
          </Link>
        )}
       
      </div>
      <div className="navbar-menu-container">
        <Button
          onClick={() => setOpenMenu(!openMenu)}
          bgColor="transparent"
          border="none"
          fontSize="2xl"
          cursor="pointer"
          className="menu-button"
        >
          ☰
        </Button>
      </div>
      {openMenu && (
        <Drawer
          isOpen={openMenu}
          placement="right"
          onClose={() => setOpenMenu(false)}
        >
          <Box w="250px">
            <List spacing={0}>
              {menuOptions.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => setOpenMenu(false)}
                  className="drawer-link"
                >
                  <Link to={item.link} className="user-menu-link">
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
