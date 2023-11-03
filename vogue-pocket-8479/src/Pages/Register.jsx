import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  VStack,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Select, // Added for the gender input
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import icons for show/hide password

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Box
        p={8}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        w={{ base: "70%", md: "380px" }}
        margin="0 auto"
        mt="30px"
        mb="20px"
        height={"500px"}
      >
        <Heading textAlign="center" size="lg">
          Sign up
        </Heading>
        <form>
          <VStack spacing={6} mt={8} align="left">
            <FormControl>
              <Input
                required
                name="f_name"
                type="text"
                placeholder="First Name"
              />
            </FormControl>
            <FormControl>
              <Input
                required
                name="l_name"
                type="text"
                placeholder="Last Name"
              />
            </FormControl>
            <FormControl>
              <Input required name="email" type="email" placeholder="Email" />
            </FormControl>
            <FormControl>
              <Input
                required
                name="age"
                type="number" // Input for age
                placeholder="Age"
              />
            </FormControl>
            <FormControl>
              <Select
                required
                name="gender"
                placeholder="Select Gender" // Dropdown for gender
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl>
              <InputGroup>
                <Input
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handlePasswordVisibility}
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </VStack>
          <Box mt="40px" textAlign="center">
            <Button
              type="submit"
              w="150px"
              bg="black"
              color="#fff"
              _hover={{ bg: "yellow.500", color: "#000" }}
            >
              SUBMIT
            </Button>
          </Box>
          <Box mt="20px" textAlign="center">
            <Link to="/login" color="blue.500">
              Log in
            </Link>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Register;
