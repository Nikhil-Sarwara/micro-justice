import React from "react";
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate("/ask-question");
  };

  return (
    <Box maxW="4xl" mx="auto" mt={10} p={6}>
      <VStack spacing={6} align="start">
        <Heading size="lg">Welcome back, {user?.name || "User"} 👋</Heading>
        <Text fontSize="md" color="gray.600">
          You are logged in with: <strong>{user?.email}</strong>
        </Text>

        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={handleAskQuestion}>
            Ask a Question
          </Button>
          <Button variant="outline" colorScheme="red" onClick={logout}>
            Logout
          </Button>
        </HStack>

        {/* Optional: Add more sections */}
        <Box mt={8} w="full">
          <Heading size="md" mb={2}>
            Recent Questions
          </Heading>
          <Text color="gray.500">Coming soon...</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
