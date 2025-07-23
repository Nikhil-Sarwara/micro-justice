import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext"; // <--- Import useAuth

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const toast = useToast();
  const { token, isAuthenticated } = useAuth(); // <--- Get token and isAuthenticated from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated || !token) { // Add a check for authenticated state
      toast({
        title: "Please log in to ask a question.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return; // Stop the function if not authenticated
    }

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // <--- Use token from context
        },
        body: JSON.stringify({ title, details, category: "general" }), // Added category as per createQuestion.js
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      toast({
        title: "Question posted!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTitle("");
      setDetails("");
    } catch (error) {
      console.error("Error posting question:", error); // Log the actual error
      toast({
        title: "Error posting question",
        description: error.message || "Something went wrong", // Use error.message directly
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="700px" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="lg">
      <Heading mb={6}>Ask a Question</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb={4} isRequired>
          <FormLabel>Question Title</FormLabel>
          <Input
            placeholder="e.g. How do I file a consumer complaint?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl id="details" mb={6} isRequired>
          <FormLabel>Details</FormLabel>
          <Textarea
            placeholder="Provide more context or background here..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={6}
          />
        </FormControl>
        {/* You also need a category input/selection, as createQuestion.js requires it */}
        <FormControl id="category" mb={6} isRequired>
          <FormLabel>Category</FormLabel>
          <Input
            placeholder="e.g. Legal, Consumer Rights"
            // You might want a select dropdown for categories
            value="general" // Placeholder, replace with actual state/input
            onChange={(e) => { /* setCategory(e.target.value) */ }}
          />
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Submit Question
        </Button>
      </form>
    </Box>
  );
};

export default AskQuestion;