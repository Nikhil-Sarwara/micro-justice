import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  GridItem,
  Badge,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Careers = () => {
  const careers = [
    {
      title: "Software Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Part-time",
    },
    {
      title: "UX Designer",
      location: "Remote",
      type: "Contract",
    },
  ];

  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")} minH="100vh" py={10}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={6} textAlign="center">
          Careers
        </Heading>
        <Text mb={6} textAlign="center" color="gray.600">
          Join our team and help us build amazing products.
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {careers.map((career, index) => (
            <GridItem
              key={index}
              p={6}
              borderWidth={1}
              borderRadius="lg"
              boxShadow="md"
              bg="white"
            >
              <VStack align="start" spacing={3}>
                <Heading size="md">{career.title}</Heading>
                <Text color="gray.500">{career.location}</Text>
                <Badge colorScheme="teal">{career.type}</Badge>
                <Button colorScheme="blue" variant="outline" size="sm">
                  Apply Now
                </Button>
              </VStack>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Careers;
