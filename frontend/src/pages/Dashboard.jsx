import React, { useState } from "react"; // Added useState import
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext"; // Ensure this path is correct and context is provided
import { useNavigate } from "react-router-dom"; // Ensure react-router-dom is set up
import CommonNav from "../components/CommonNav"; // Ensure this path is correct
import MainContent from "../components/MainContent"; // Ensure this path is correct

/**
 * Dashboard component for logged-in users.
 * Displays a common navigation, main content area with questions,
 * and handles search and category filtering.
 */
const Dashboard = () => {
  const { user, logout } = useAuth(); // Assuming useAuth provides user object and logout function
  const navigate = useNavigate(); // For navigating between routes

  // State for search query and selected category
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  /**
   * Handles navigation to the "Ask a Question" page.
   */
  const handleAskQuestion = () => {
    navigate("/ask-question");
  };

  return (
    // The Box maxW and padding were causing the previous wireframe to be narrow.
    // Assuming you want a full-width layout for the main page containers,
    // ensure your root App.js or main layout component handles the overall max-width.
    // For now, setting maxW to "full" to prevent content from being too constrained by this specific Box.
    <Box width="100%" minHeight="100vh" bg="gray.50"> {/* Added bg for overall page background, minHeight for full screen */}
      <VStack spacing={0} align="stretch"> {/* Set spacing to 0 here, individual components will handle their spacing */}

        {/* Common Navigation Bar (previously Header) */}
        <CommonNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        {/* These sections are currently commented out in your provided code.
          If you wish to display them (e.g., welcome message, ask question, logout),
          uncomment the following lines. They are good elements for a dashboard.
        */}
        {/*
        <Box px={6} py={4} width="100%" maxWidth="7xl" mx="auto">
          <Heading size="lg">Welcome back, {user?.name || "User"} 👋</Heading>
          <Text fontSize="md" color="gray.600" mt={2}>
            You are logged in with: <strong>{user?.email}</strong>
          </Text>

          <HStack spacing={4} mt={4}>
            <Button colorScheme="teal" onClick={handleAskQuestion}>
              Ask a Question
            </Button>
            <Button variant="outline" colorScheme="red" onClick={logout}>
              Logout
            </Button>
          </HStack>
        </Box>
        */}

        {/* Main Content Area, passing search and category states */}
        <MainContent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
        />
      </VStack>
    </Box>
  );
};

export default Dashboard;