import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  ChakraProvider,
} from '@chakra-ui/react';

function Contact() {
  const address = 'Fortis Malar Hospital, No. 52, 1st Main Rd, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020';
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(
    address
  )}`;

  return (
    <ChakraProvider>
      <Flex
        flexDirection="row"
        // minHeight="50vh"
        bgImage="https://admin.risingkashmir.com/Source/News/668fba0a-9927-48c0-a950-4801e4868ad8.png"
        bgSize="cover"
        bgPosition="center"
        opacity="0.7"
      >
        {/* First Part */}
        <Box
          py={9}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
          paddingTop={0}
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            
            <a href={googleMapsUrl}>
                <Box opacity="0.9" paddingBottom="5">
                    <img src="https://i.stack.imgur.com/HILmr.png" alt="Location" width="500" height="50" />
                </Box>
            </a>
            <Text fontSize="xl" mb={2} fontWeight="600">
              Address
            </Text>
            <Link href={googleMapsUrl} isExternal color="black" fontWeight="bold">
              <Text fontSize="lg" marginLeft={10} marginRight={10} textAlign={'center'}>{address}</Text>
            </Link>
          </Flex>
        </Box>

        {/* Second Part */}
        <Box
          py={9}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
          paddingTop={0}
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <a href="tel:+911234567890">
                <Box mb={6} marginTop={0}>
                    <img src="https://petapixel.com/assets/uploads/2023/04/facebook-contact-support-featured.jpg" alt="Contact" width="600" height="70" />
                </Box>
            </a>
            <Text fontSize="xl" mb={2} fontWeight="600">
              Lets Talk
            </Text>
            <a href="tel:+911234567890" style={{ textDecoration: 'none' }}>
                <Text fontSize="lg" cursor="pointer">
                +91 12345 67890
                </Text>
            </a>
          </Flex>
        </Box>

        {/* Third Part */}
        <Box
          py={8}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
          paddingTop={0}
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <a href="mailto:contact@example.com">
                <Box mb={6}>
                    <img src="https://martech.org/wp-content/uploads/2015/04/opening-email-ss-1920.jpg" alt="Location" width="400" height="30" />
                </Box>
            </a>
            <Text fontSize="xl" mb={2} fontWeight="600">
              General Support
            </Text>
            <a href="mailto:contact@email.com" style={{ textDecoration: 'none' }}>
                <Text fontSize="lg" cursor="pointer">
                    contact@email.com
                </Text>
            </a>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Contact;

