import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "./Login"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const initialData = {
  name: "",
  l_name: "",
  email: "",
  password: "",
  token: "",
  admin: false,
};

const Register = () => {
  const [userData, setUserData] = useState(initialData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
      token:
        prev.name.slice(3) +
        Math.floor(Math.random() * 99999) +
        prev.l_name.slice(3),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${URL}/users`, // Make sure you define URL or use the actual URL here
      data: userData,
    })
      .then((r) => navigate("/login"))
      .catch((error) => console.log(error));
  };

  // return (
  //   <Box p={15} width={200} padding={20} >
  //     <Text fontSize="2xl" fontWeight="bold" mb={4}>
  //       Register
  //     </Text>
  //     <FormControl>
  //       <FormLabel>First Name</FormLabel>
  //       <Input
  //         name="name"
  //         type="text"
  //         placeholder="First Name"
  //         onChange={handleChange}
  //       />
  //     </FormControl>
  //     <FormControl mt={4}>
  //       <FormLabel>Last Name</FormLabel>
  //       <Input
  //         name="l_name"
  //         type="text"
  //         placeholder="Last Name"
  //         onChange={handleChange}
  //       />
  //     </FormControl>
  //     <FormControl mt={4}>
  //       <FormLabel>Email</FormLabel>
  //       <Input
  //         name="email"
  //         type="email"
  //         placeholder="Email"
  //         onChange={handleChange}
  //       />
  //     </FormControl>
  //     <FormControl mt={4}>
  //       <FormLabel>Password</FormLabel>
  //       <Input
  //         name="password"
  //         type="password"
  //         placeholder="Password"
  //         onChange={handleChange}
  //       />
  //     </FormControl>
  //     <Button
  //       mt={4}
  //       colorScheme="blue"
  //       onClick={handleSubmit}
  //       size="md"
  //     >
  //       Register
  //     </Button>
  //     <Text mt={2}>
  //       Already have an account?{" "}
  //       <Link to="/login" color="blue.500">
  //         Login
  //       </Link>
  //     </Text>
  //   </Box>
  // );
  return (
    <Box p={6} width={400} margin="0 auto" padding="20px">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Enter your credentials to Register
      </Text>
      <FormControl>
        <Input
          name="name"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mt={4}>
        {/* <FormLabel>Last Name</FormLabel> */}
        <Input
          name="l_name"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mt={4}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mt={4}>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </FormControl>
      <Button
        mt={4}
        colorScheme="blue"
        onClick={handleSubmit}
        size="md"
      >
        Register
      </Button>
      <Text mt={2}>
        Already have an account?{" "}
        <Link to="/login" color="blue.500">
          Login
        </Link>
      </Text>
    </Box>
  );
};

export default Register;

