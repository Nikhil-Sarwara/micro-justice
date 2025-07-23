import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("general");
  const toast = useToast();

  // Get authentication data from the context
  const { user, token, isAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast({
        title: "Please log in to ask a question.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const requestBody = { title, description, category };

    // Log the exact body being sent
    console.log(
      "[DEBUG] Request Body Sent to Backend:",
      JSON.stringify(requestBody)
    );

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // The backend middleware uses this token to identify the user
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      // ... rest of the function
    } catch (error) {
      // ... error handling
    }
  };

  return (
    // ... JSX for your form ...
    <Box
      maxW="700px"
      mx="auto"
      mt={10}
      p={5}
      borderWidth="1px"
      borderRadius="lg"
    >
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

        <FormControl id="description" mb={6} isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Provide more context or background here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
          />
        </FormControl>

        <FormControl id="category" mb={6} isRequired>
          <FormLabel>Category</FormLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="general">General</option>
            <option value="legal">Legal</option>
            <option value="consumer-rights">Consumer Rights</option>
            <option value="technical">Technical</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Submit Question
        </Button>
      </form>
    </Box>
  );
};

export default AskQuestion;
