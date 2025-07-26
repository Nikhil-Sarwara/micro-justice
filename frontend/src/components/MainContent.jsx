import React from 'react';
import { Box, Flex, Text, Button, VStack, HStack, Stack, Icon } from '@chakra-ui/react'; // Added Icon
import { Plus } from 'lucide-react';

import SearchBar from './SearchBar'; // Assuming SearchBar is in the same directory or adjust path
import QuestionCard from './QuestionCard'; // Assuming QuestionCard is in the same directory or adjust path
import { useNavigate } from 'react-router-dom';

/**
 * @typedef {Object} MainContentProps
 * @property {string} searchQuery
 * @property {(query: string) => void} setSearchQuery
 * @property {string} selectedCategory
 */

/**
 * MainContent component displays the main question feed.
 * @param {MainContentProps} { searchQuery, setSearchQuery, selectedCategory }
 */
const MainContent = ({ searchQuery, setSearchQuery, selectedCategory }) => {
  // Dummy data for questions - replace with actual data fetching
  const questions = [
    {
      id: 1,
      title: "What are my rights as a tenant if my landlord wants to increase rent?",
      content: "My landlord has notified me of a rent increase that seems excessive. I'm wondering what legal protections I have as a tenant and what steps I can take...",
      author: "Maria Rodriguez",
      authorReputation: 145,
      tags: ["housing", "tenant-rights", "rent-increase"],
      votes: 23,
      answers: 7,
      views: 1247,
      timeAgo: "2 hours ago",
      isAnswered: true
    },
    {
      id: 2,
      title: "Can my employer terminate me for filing a workplace complaint?",
      content: "I recently filed a complaint with HR about workplace harassment. Now I'm concerned about potential retaliation. What protections do employees have?",
      author: "James Chen",
      authorReputation: 89,
      tags: ["employment", "workplace-harassment", "retaliation"],
      votes: 34,
      answers: 12,
      views: 2156,
      timeAgo: "5 hours ago",
      isAnswered: true
    },
    {
      id: 3,
      title: "How do I obtain legal custody of my deceased sister's children?",
      content: "My sister passed away unexpectedly and left behind two young children. Their father is not involved. What steps do I need to take to gain legal custody?",
      author: "Patricia Williams",
      authorReputation: 67,
      tags: ["family-law", "custody", "guardianship"],
      votes: 45,
      answers: 0,
      views: 567,
      timeAgo: "1 day ago",
      isAnswered: false
    },
    {
      id: 4,
      title: "What documentation do I need for my immigration status adjustment?",
      content: "I'm applying to adjust my status from a student visa to permanent resident. What documents should I prepare and what is the typical timeline?",
      author: "Ahmed Hassan",
      authorReputation: 234,
      tags: ["immigration", "status-adjustment", "documentation"],
      votes: 28,
      answers: 9,
      views: 892,
      timeAgo: "2 days ago",
      isAnswered: true
    },
    {
      id: 5,
      title: "Is it legal for a business to refuse service based on appearance?",
      content: "A local restaurant refused to serve my friend, citing their dress code policy. However, the policy seems discriminatory. What are the legal boundaries here?",
      author: "David Thompson",
      authorReputation: 156,
      tags: ["civil-rights", "discrimination", "business-law"],
      votes: 19,
      answers: 5,
      views: 743,
      timeAgo: "3 days ago",
      isAnswered: false
    }
  ];

  const getCategoryTitle = (category) => {
    if (category === 'all') return 'All Questions';
    if (category === 'unanswered') return 'Unanswered Questions';
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const navigate = useNavigate();

  return (
    <Box as="main" flex="1" bg="slate.50" py={6}> {/* Added py for vertical padding */}
      <Box maxWidth="4xl" mx="auto" px={6}> {/* Added px for horizontal padding */}
        {/* Header Section */}
        <Box mb={8}>
          <Flex alignItems="center" justifyContent="space-between" mb={6}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" color="slate.800">
                {getCategoryTitle(selectedCategory)}
              </Text>
              <Text color="slate.600" mt={1}>Find answers to legal questions from our community</Text>
            </Box>
            <Button
              bg="teal.600"
              _hover={{ bg: 'teal.700' }}
              color="white"
              px={4}
              py={2}
              borderRadius="lg"
              fontWeight="medium"
              transition="colors 0.2s"
              leftIcon={<Icon as={Plus} boxSize="4" />}
              onClick={() => navigate("/ask-question")}
            >
              Ask Question
            </Button>
          </Flex>

          {/* Search Bar */}
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Box>

        {/* Filter Tabs */}
        <HStack
          spacing={1}
          mb={6}
          bg="white"
          borderRadius="lg"
          p={1}
          border="1px"
          borderColor="slate.200"
          wrap="wrap" // Added for responsiveness in case buttons wrap
        >
          <Button
            px={4}
            py={2}
            borderRadius="md"
            fontSize="sm"
            fontWeight="medium"
            bg="teal.100"
            color="teal.700"
            variant="ghost" // Using ghost variant as a base
            _hover={{ bg: 'teal.200' }} // More subtle hover for active
          >
            Newest
          </Button>
          <Button
            px={4}
            py={2}
            borderRadius="md"
            fontSize="sm"
            fontWeight="medium"
            color="slate.600"
            _hover={{ color: 'slate.800', bg: 'slate.50' }}
            transition="colors 0.2s"
            variant="ghost"
          >
            Active
          </Button>
          <Button
            px={4}
            py={2}
            borderRadius="md"
            fontSize="sm"
            fontWeight="medium"
            color="slate.600"
            _hover={{ color: 'slate.800', bg: 'slate.50' }}
            transition="colors 0.2s"
            variant="ghost"
          >
            Unanswered
          </Button>
          <Button
            px={4}
            py={2}
            borderRadius="md"
            fontSize="sm"
            fontWeight="medium"
            color="slate.600"
            _hover={{ color: 'slate.800', bg: 'slate.50' }}
            transition="colors 0.2s"
            variant="ghost"
          >
            Most Voted
          </Button>
        </HStack>

        {/* Questions List */}
        <Stack spacing={4}> {/* Using Stack for vertical spacing */}
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </Stack>

        {/* Load More */}
        <Box mt={8} textAlign="center">
          <Button
            bg="white"
            _hover={{ bg: 'slate.50' }}
            color="slate.700"
            px={6}
            py={3}
            borderRadius="lg"
            border="1px"
            borderColor="slate.200"
            fontWeight="medium"
            transition="colors 0.2s"
            variant="outline" // Using outline variant as a base
          >
            Load More Questions
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;