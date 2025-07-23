import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaBalanceScale, FaPenNib, FaUsers } from "react-icons/fa";

export default function Status() {
  return (
    <Container maxW="container.xl" py={12}>
      <Flex justify="center">
        <VStack align="start" spacing={4}>
          <Heading size="lg">Your Status in this World</Heading>
          <Text fontSize="md" color="gray.600">
            You are a valued member of our community. You are one of the
            following:
          </Text>

          <HStack spacing={4}>
            <Button variant="outline" colorScheme="teal" leftIcon={<FaUsers />}>
              A concerned citizen
            </Button>
            <Button
              variant="outline"
              colorScheme="teal"
              leftIcon={<FaPenNib />}
            >
              A passionate writer
            </Button>
            <Button
              variant="outline"
              colorScheme="teal"
              leftIcon={<FaBalanceScale />}
            >
              A seeker of justice
            </Button>
          </HStack>

          <Text fontSize="md" color="gray.600">
            You can also ask a question to the community. We will do our best to
            provide a helpful answer.
          </Text>

          <Link to="/ask-question">
            <Button colorScheme="teal" size="lg">
              Ask a Question
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Container>
  );
}
