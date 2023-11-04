import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  DrawerContent
} from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import {
  Avatar,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../reduxAuth/action";
import axios from "axios";

 
export default function NavBar(){

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const btnRef = useRef();
  
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth);
  let isBooked=useSelector((store)=>store.AuthReducer.isBooked);
  
  const [userDetails, setUserDetails] = useState([]);


  const navigate = useNavigate();
  const dispatch=useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('sm');
  const storedUsers = localStorage.getItem("users");
  const userName = storedUsers ? JSON.parse(storedUsers) : [];

  let userIndex; // Declare userIndex outside the axios.get callback
  console.log("navv",userName)
  
  let emailFromStore=useSelector((store)=>store.AuthReducer.storedEmail);
  console.log("aaa",emailFromStore)
  
  let foundName=userName.find((user)=>user.email==emailFromStore);
  console.log("navvvvv",foundName)


  const handleLogout = () => {
    dispatch(authLogout())
    navigate("/");
  };

  useEffect(()=>{
    console.log("navbarA",isAuth);
    console.log("navbarB",isBooked);

    if(isAuth || isBooked){
      axios.get('https://forevercare.onrender.com/users')
              .then((response) => { console.log("1st fetch",response.data)
                const existingData = response.data;
                 userIndex = existingData.find(user => user.email === emailFromStore);
                console.log("navbarUserBookedDetails",userIndex)
                if (userIndex) {      
                  setUserDetails(userIndex.userDetails);
                  isBooked=false;
                }
                console.log("3rd",userIndex.userDetails);
              })
    }
  },[isAuth,isBooked])
  const linkAction = isAuth ? handleLogout : null;
 
  const Paths = [
    { path: "/", onClick: linkAction, label: "Home" },
    { path: "/services", onClick: linkAction, label: "Service" },
    { path: "/about", onClick: linkAction, label: "About" },
    { path: "/packages", onClick: linkAction, label: "Packages" },
    { path: "/contact", onClick: linkAction, label: "Contact" },
  ];

  const openDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  
  return (

   <div>
    <Box position="relative" zIndex={10} mb={"60px"}>
      <Box
        position="fixed"
        width={"-webkit-full-available"}
        top={0}
        left={0}
        right={0}
        bg="transparent"
      >
      <Box

      bg={"rgb(237,243,248)"}
      px={4} color={"white"} fontWeight={"bold"} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between" }>
          <IconButton
            as = {HamburgerIcon}
            _hover={{
              textDecoration: "none",
            }}
            size={"md"}
            icon={isOpen ? "" :""}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box>
          <Link to="/">
                <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x9j5guxzzgksruid010e.png" alt="Logo" width={"240px"} height={"200px"} />
              </Link>
          </Box>
          
          <HStack spacing={8} alignItems={"center"} color={"black"}>
            
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              justifyContent="center"
            >
              {Paths.map((ele) => (
                <Link key={ele.label} to={ele.path} >
                  <ChakraLink px={2}
                  py={1}
                  rounded={'md'}
                  fontWeight={"500"}
                  letterSpacing={1.2}
                  _hover={{
                    textDecoration: 'none',
                    color:"#329938"
                  }}>
                    {ele.label}
                  </ChakraLink>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {isAuth ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                  bgColor={"black"}
                    size={"sm"}
                    src={
                      ""
                    }
                  />
                {/* <Button bgColor={"#009E60"} color={"white"}></Button> */}
                </MenuButton>
               
                <MenuList color={"black"}>
                <MenuItem
                 
                 _hover={{
                   textDecoration: "none",
                   color: "#2e9e33"
                 }}
               >
               </MenuItem>
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      color: "#329938"
                    }}
                  >
                    User Details
                  </MenuItem>
                  {/* <Link to="/appointments"> */}
                  <MenuItem
                  // onClick={openDrawer}
                  ref={btnRef}
                    _hover={{
                      textDecoration: "none",
                      color: "#329938"
                    }}
                  >
                  My Appointments
                  </MenuItem>
                  {/* </Link> */}
                  
                  <MenuDivider />
                  
                  <MenuItem
                   onClick={linkAction}
                    _hover={{
                      textDecoration: "none",
                      color: "#329938"
                    }}
                  >
                  Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link key={"login"} to="/signup" >
                <ChakraLink
              
                px={2}
                py={1}
                _hover={{
                  textDecoration: 'none',
                  color: "black"
                }} color={"black"}>
                  <Button bgColor={"#009E60"} color={"white"}  _hover={{
                  textDecoration: 'none',
                  color: "black",
                  bg:"white"
                }} >SIGN-IN</Button>
                </ChakraLink>
              </Link>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}  bg={"white"} borderRadius={5} padding={2} textAlign={"left"} color="black">
              {Paths.map((ele) => (
                <Link key={ele.label} to={ele.path}>
                  <ChakraLink px={2} py={1} rounded={'md'}
                      _hover={{
                      textDecoration: 'none',
                    bg: "#AED943",
                  }}>
                  {ele.label} </ChakraLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      </Box>
      </Box>
    </div>
  );
}