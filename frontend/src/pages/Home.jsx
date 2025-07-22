import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PostCard from "../components/PostCard";
import SuggestionPanel from "../components/SuggestionPanel";

const Home = () => {
  const examplePost = {
    title: "Tenant Rights Issue",
    content: "My landlord is increasing rent without notice. What can I do?",
  };

  const exampleSuggestions = [
    "Check your local tenancy laws regarding rent increases.",
    "Contact a community legal center for free advice.",
    "Document all communication with your landlord.",
  ];

  return (
    <Box p={6}>
      <Heading mb={4}>Latest Discussions</Heading>
      <PostCard post={examplePost} />
      <SuggestionPanel suggestions={exampleSuggestions} />
    </Box>
  );
};

export default Home;
