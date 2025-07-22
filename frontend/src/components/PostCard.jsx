import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaThumbsUp, FaComment } from "react-icons/fa";

const PostCard = ({ post }) => {
  return (
    <Box bg="white" boxShadow="md" borderRadius="lg" p={4} mb={4}>
      <VStack align="start" spacing={2}>
        <Heading size="sm">{post.title}</Heading>
        <Text>{post.content}</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Like post" icon={<FaThumbsUp />} size="sm" />
          <IconButton aria-label="Comment" icon={<FaComment />} size="sm" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default PostCard;
