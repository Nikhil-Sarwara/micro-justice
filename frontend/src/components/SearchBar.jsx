import React from 'react';
import { Search, Filter } from 'lucide-react';
import {
  Box,
  Flex,
  Input,
  IconButton, // Changed from Button to IconButton for icon-only button
  Text,
  HStack,
  VStack,
  Button, // Still needed for the suggestion buttons
  Show,
  Icon // Imported Icon component
} from '@chakra-ui/react';

/**
 * @typedef {Object} SearchBarProps
 * @property {string} searchQuery
 * @property {(query: string) => void} setSearchQuery
 */

/**
 * SearchBar component provides a search input with an optional filter button and suggestions.
 * @param {SearchBarProps} { searchQuery, setSearchQuery }
 */
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box position="relative">
      <Flex
        alignItems="center"
        bg="white"
        borderRadius="lg"
        border="1px"
        borderColor="slate.200"
        shadow="sm"
      >
        <Flex alignItems="center" pl={4}>
          <Icon as={Search} boxSize="5" color="slate.400" /> {/* Use Icon for Lucide */}
        </Flex>
        <Input
          type="text"
          placeholder="Search questions, tags, or topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          flex="1"
          px={4}
          py={3}
          bg="transparent"
          color="slate.700"
          _placeholder={{ color: 'slate.400' }}
          border="none" // Remove default input border
          _focus={{ boxShadow: 'none' }} // Remove default input focus outline
        />
        <Button // Changed to Button from IconButton to allow for text + icon, or use HStack in IconButton
          display="flex"
          alignItems="center"
          gap={2}
          px={4}
          py={3}
          color="slate.600"
          _hover={{ color: 'slate.800' }}
          borderLeft="1px"
          borderColor="slate.200"
          transition="colors 0.2s"
          variant="ghost"
          borderRadius="none"
        >
          <Icon as={Filter} boxSize="4" /> {/* Use Icon for Lucide */}
          <Show breakpoint='(min-width: 48em)'> {/* sm:inline equivalent */}
            <Text as="span" fontSize="sm" fontWeight="medium">Filters</Text>
          </Show>
        </Button>
      </Flex>

      {/* Search Suggestions (when focused) */}
      {searchQuery && (
        <Box
          position="absolute"
          top="100%" // top-full equivalent
          left="0"
          right="0"
          mt={2}
          bg="white"
          borderRadius="lg"
          border="1px"
          borderColor="slate.200"
          shadow="lg"
          zIndex="10"
        >
          <Box p={2}>
            <Text px={3} py={2} fontSize="xs" fontWeight="medium" color="slate.500" textTransform="uppercase" letterSpacing="wide">
              Popular Searches
            </Text>
            <VStack spacing={1} align="stretch"> {/* space-y-1 equivalent */}
              <Button
                width="100%"
                textAlign="left"
                px={3}
                py={2}
                _hover={{ bg: 'slate.50' }}
                borderRadius="md"
                fontSize="sm"
                color="slate.700"
                transition="colors 0.2s"
                variant="ghost" // Use ghost variant
              >
                tenant rights
              </Button>
              <Button
                width="100%"
                textAlign="left"
                px={3}
                py={2}
                _hover={{ bg: 'slate.50' }}
                borderRadius="md"
                fontSize="sm"
                color="slate.700"
                transition="colors 0.2s"
                variant="ghost"
              >
                employment discrimination
              </Button>
              <Button
                width="100%"
                textAlign="left"
                px={3}
                py={2}
                _hover={{ bg: 'slate.50' }}
                borderRadius="md"
                fontSize="sm"
                color="slate.700"
                transition="colors 0.2s"
                variant="ghost"
              >
                immigration status
              </Button>
            </VStack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;