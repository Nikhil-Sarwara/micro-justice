import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaHandshake, FaGlobe, FaUsers } from "react-icons/fa";

const About = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Container maxW="6xl" py={8}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl" color={textColor}>
          About Us
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We are committed to providing the best service possible. Our team
          works diligently to ensure customer satisfaction at every stage.
        </Text>

        <SimpleGrid columns={[1, 1, 3]} spacing={10} mt={10}>
          <Box bg={bgColor} p={6} borderRadius="md" boxShadow="md">
            <HStack spacing={4}>
              <Icon as={FaHandshake} w={10} h={10} color="teal.500" />
              <Heading as="h3" size="md" color={textColor}>
                Our Mission
              </Heading>
            </HStack>
            <Text mt={4} color="gray.500">
              To build strong relationships with our clients by offering
              excellent services that exceed expectations.
            </Text>
          </Box>

          <Box bg={bgColor} p={6} borderRadius="md" boxShadow="md">
            <HStack spacing={4}>
              <Icon as={FaGlobe} w={10} h={10} color="teal.500" />
              <Heading as="h3" size="md" color={textColor}>
                Our Vision
              </Heading>
            </HStack>
            <Text mt={4} color="gray.500">
              To become a global leader in our industry by consistently
              delivering outstanding value and innovation.
            </Text>
          </Box>

          <Box bg={bgColor} p={6} borderRadius="md" boxShadow="md">
            <HStack spacing={4}>
              <Icon as={FaUsers} w={10} h={10} color="teal.500" />
              <Heading as="h3" size="md" color={textColor}>
                Our Team
              </Heading>
            </HStack>
            <Text mt={4} color="gray.500">
              Our diverse team of professionals is dedicated to achieving
              excellence in all aspects of our business operations.
            </Text>
          </Box>
        </SimpleGrid>

        <Box mt={10} textAlign="center">
          <Image
            src="https://via.placeholder.com/800x400"
            alt="Our Team"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default About;
