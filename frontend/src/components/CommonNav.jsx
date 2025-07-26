import React from 'react';
import { Search, Bell, MessageSquare, User, Menu } from 'lucide-react';
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  HStack,
  Spacer,
  IconButton,
  Show,
  Hide,
  Avatar,
  VStack // Added VStack for potential vertical stacking within profile summary
} from '@chakra-ui/react';

const CommonNav = () => {
  return (
    <Box w="100%" as="header" bg="white" shadow="sm" borderBottom="1px" borderColor="slate.200">
      <Flex
        maxWidth="7xl"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8 }}
        justifyContent="space-between"
        alignItems="center"
        height="16"
      >
        {/* Logo and Brand */}
        <HStack spacing={4}>
          <HStack spacing={2}>
            <Flex
              w="8"
              h="8"
              bgGradient="linear(to-br, teal.500, cyan.500)"
              borderRadius="lg"
              alignItems="center"
              justifyContent="center"
            >
              <MessageSquare boxSize="5" color="white" />
            </Flex>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="slate.800">
                Microjustice Connect
              </Text>
              <Show breakpoint="(min-width: 48em)"> {/* sm:block equivalent */}
                <Text fontSize="xs" color="slate.500">Community Q&A Platform</Text>
              </Show>
            </Box>
          </HStack>
        </HStack>

        {/* Navigation */}
        <Hide breakpoint="(max-width: 47.999em)"> {/* hidden md:flex equivalent */}
          <HStack as="nav" spacing={8}>
            <Link href="#" color="slate.600" _hover={{ color: 'teal.600' }} fontWeight="medium" transition="all 0.2s">Questions</Link>
            <Link href="#" color="slate.600" _hover={{ color: 'teal.600' }} fontWeight="medium" transition="all 0.2s">Tags</Link>
            <Link href="#" color="slate.600" _hover={{ color: 'teal.600' }} fontWeight="medium" transition="all 0.2s">Users</Link>
            <Link href="#" color="slate.600" _hover={{ color: 'teal.600' }} fontWeight="medium" transition="all 0.2s">Resources</Link>
          </HStack>
        </Hide>

        {/* User Actions */}
        <HStack spacing={4}>
          <IconButton
            aria-label="Notifications"
            icon={<Bell boxSize="5" />}
            p="2"
            color="slate.600"
            _hover={{ color: 'teal.600', bg: 'slate.100' }}
            borderRadius="lg"
            transition="all 0.2s"
            variant="ghost" // Use ghost variant for button style
          />
          <IconButton
            aria-label="Messages"
            icon={<MessageSquare boxSize="5" />}
            p="2"
            color="slate.600"
            _hover={{ color: 'teal.600', bg: 'slate.100' }}
            borderRadius="lg"
            transition="all 0.2s"
            variant="ghost"
          />
          <HStack spacing={2} pl={4} borderLeft="1px" borderColor="slate.200">
            <Avatar
              size="sm" // Chakra UI Avatar size prop
              bgGradient="linear(to-br, teal.500, cyan.500)"
              icon={<User boxSize="4" color="white" />}
              borderRadius="full"
            />
            <Show breakpoint="(min-width: 48em)"> {/* sm:block equivalent */}
              <VStack align="flex-start" spacing={0}>
                <Text fontSize="sm" fontWeight="medium" color="slate.800">Sarah Wilson</Text>
                <Text fontSize="xs" color="slate.500">Legal Advisor</Text>
              </VStack>
            </Show>
          </HStack>
          <Show breakpoint="(max-width: 47.999em)"> {/* md:hidden equivalent */}
            <IconButton
              aria-label="Open menu"
              icon={<Menu boxSize="5" />}
              p="2"
              color="slate.600"
              _hover={{ color: 'teal.600', bg: 'slate.100' }}
              borderRadius="lg"
              transition="all 0.2s"
              variant="ghost"
            />
          </Show>
        </HStack>
      </Flex>
    </Box>
  );
};

export default CommonNav;