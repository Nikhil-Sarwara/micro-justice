import React from "react";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const SuggestionPanel = ({ suggestions }) => {
  return (
    <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm" mt={4}>
      <Heading size="sm" mb={2}>
        AI Suggestions
      </Heading>
      <VStack align="start" spacing={2}>
        {suggestions?.map((item, index) => (
          <Text key={index} fontSize="sm" color="gray.700">
            • {item}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default SuggestionPanel;
