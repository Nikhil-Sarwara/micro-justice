import React from 'react';
import { ArrowUp, ArrowDown, MessageSquare, Eye, CheckCircle2, Clock } from 'lucide-react';
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Tag,
  Icon, // Imported Icon component
  Avatar,
} from '@chakra-ui/react';

/**
 * @typedef {Object} Question
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {string} author
 * @property {number} authorReputation
 * @property {string[]} tags
 * @property {number} votes
 * @property {number} answers
 * @property {number} views
 * @property {string} timeAgo
 * @property {boolean} isAnswered
 */

/**
 * @typedef {Object} QuestionCardProps
 * @property {Question} question
 */

/**
 * QuestionCard component displays a single question with its details and interactions.
 * @param {QuestionCardProps} { question }
 */
const QuestionCard = ({ question }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      border="1px"
      borderColor="slate.200"
      shadow="sm"
      _hover={{ shadow: 'md' }}
      transition="shadow 0.2s"
    >
      <Box p={6}>
        <Flex alignItems="flex-start" gap={4}>
          {/* Vote Column */}
          <VStack spacing={2} minWidth="60px">
            <Button
              p={1}
              _hover={{ bg: 'slate.100' }}
              borderRadius="md"
              transition="colors 0.2s"
              variant="ghost" // Use ghost variant for button style
              aria-label="Upvote"
            >
              <Icon as={ArrowUp} boxSize="5" color="slate.400" _hover={{ color: 'teal.600' }} />
            </Button>
            <Text fontSize="lg" fontWeight="semibold" color="slate.700">
              {question.votes}
            </Text>
            <Button
              p={1}
              _hover={{ bg: 'slate.100' }}
              borderRadius="md"
              transition="colors 0.2s"
              variant="ghost" // Use ghost variant for button style
              aria-label="Downvote"
            >
              <Icon as={ArrowDown} boxSize="5" color="slate.400" _hover={{ color: 'red.500' }} />
            </Button>
          </VStack>

          {/* Content */}
          <VStack flex="1" minWidth="0" alignItems="flex-start">
            <Flex alignItems="flex-start" justifyContent="space-between" width="100%">
              <Text
                as="h3"
                fontSize="lg"
                fontWeight="semibold"
                color="slate.800"
                mb={2}
                lineHeight="tight"
                _hover={{ color: 'teal.600' }}
                cursor="pointer"
                transition="colors 0.2s"
              >
                {question.title}
              </Text>
              {question.isAnswered && (
                <HStack spacing={1} color="green.600" ml={4}>
                  <Icon as={CheckCircle2} boxSize="4" />
                  <Text fontSize="xs" fontWeight="medium">Answered</Text>
                </HStack>
              )}
            </Flex>

            <Text color="slate.600" mb={4} noOfLines={2}>
              {question.content}
            </Text>

            {/* Tags */}
            <Flex flexWrap="wrap" gap={2} mb={4}>
              {question.tags.map((tag) => (
                <Tag
                  key={tag}
                  px={2}
                  py={1}
                  bg="slate.100"
                  color="slate.600"
                  fontSize="xs"
                  fontWeight="medium"
                  borderRadius="md"
                  _hover={{ bg: 'slate.200' }}
                  cursor="pointer"
                  transition="colors 0.2s"
                >
                  #{tag}
                </Tag>
              ))}
            </Flex>

            {/* Meta Information */}
            <Flex alignItems="center" justifyContent="space-between" width="100%">
              <HStack spacing={4} fontSize="sm" color="slate.500">
                <HStack spacing={1}>
                  <Icon as={MessageSquare} boxSize="4" />
                  <Text>{question.answers} answers</Text>
                </HStack>
                <HStack spacing={1}>
                  <Icon as={Eye} boxSize="4" />
                  <Text>{question.views.toLocaleString()} views</Text>
                </HStack>
                <HStack spacing={1}>
                  <Icon as={Clock} boxSize="4" />
                  <Text>{question.timeAgo}</Text>
                </HStack>
              </HStack>

              {/* Author */}
              <HStack spacing={2}>
                <VStack align="flex-end" spacing={0}>
                  <Text fontSize="sm" fontWeight="medium" color="slate.700">{question.author}</Text>
                  <Text fontSize="xs" color="slate.500">{question.authorReputation.toLocaleString()} reputation</Text>
                </VStack>
                <Avatar
                  size="md" // Adjusted size to match original w-8 h-8
                  bgGradient="linear(to-br, teal.400, cyan.500)"
                  borderRadius="full"
                  name={question.author} // Use author name for initials fallback
                  // If you want custom initials:
                  // children={
                  //   <Text fontSize="xs" fontWeight="semibold" color="white">
                  //     {question.author.split(' ').map(n => n[0]).join('')}
                  //   </Text>
                  // }
                />
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default QuestionCard;