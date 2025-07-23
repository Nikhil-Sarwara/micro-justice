import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function Help() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isFaqOpen,
    onOpen: onFaqOpen,
    onClose: onFaqClose,
  } = useDisclosure();
  const {
    isOpen: isSupportOpen,
    onOpen: onSupportOpen,
    onClose: onSupportClose,
  } = useDisclosure();

  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} align="start">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="2xl" mb={4}>
              Help
            </Heading>
            <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              leftIcon={<Icon as={FaQuestion} />}
              onClick={onOpen}
            >
              Contact Us
            </Button>
          </Flex>

          <Text>
            We're here to help you with any questions or issues you may have.
            Please feel free to contact us using the form below.
          </Text>

          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            <Box
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="sm"
              transition="all 0.2s"
              _hover={{ boxShadow: "md" }}
              onClick={onFaqOpen}
            >
              <Heading as="h3" size="lg" mb={4}>
                Frequently Asked Questions
              </Heading>
              <Text>
                Find answers to the most common questions about our products and
                services.
              </Text>
            </Box>

            <Box
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="sm"
              transition="all 0.2s"
              _hover={{ boxShadow: "md" }}
              onClick={onSupportOpen}
            >
              <Heading as="h3" size="lg" mb={4}>
                Support Ticket
              </Heading>
              <Text>
                If you have a specific issue or question, please submit a
                support ticket and we'll get back to you as soon as possible.
              </Text>
            </Box>

            <Box
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="sm"
              transition="all 0.2s"
              _hover={{ boxShadow: "md" }}
              onClick={onOpen}
            >
              <Heading as="h3" size="lg" mb={4}>
                Contact Us
              </Heading>
              <Text>
                If you have any general questions or comments, please feel free
                to contact us using the form below.
              </Text>
            </Box>
          </SimpleGrid>

          <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
            leastDestructiveRef={null}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>Contact Us</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  <Text>
                    Please fill out the contact form below and we'll get back to
                    you as soon as possible.
                  </Text>
                  <form>
                    <FormControl mt={4}>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Message</FormLabel>
                      <Textarea />
                    </FormControl>
                  </form>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onClose}>Close</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          <AlertDialog
            isOpen={isFaqOpen}
            onClose={onFaqClose}
            leastDestructiveRef={null}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>
                  Frequently Asked Questions
                </AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  <Text>
                    Please check out our FAQ page for answers to the most common
                    questions about our products and services.
                  </Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onFaqClose}>Close</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          <AlertDialog
            isOpen={isSupportOpen}
            onClose={onSupportClose}
            leastDestructiveRef={null}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>Support Ticket</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  <Text>
                    Please submit a support ticket and we'll get back to you as
                    soon as possible.
                  </Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onSupportClose}>Close</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </VStack>
      </Container>
    </Box>
  );
}
