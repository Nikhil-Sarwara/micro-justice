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
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaBalanceScale,
  FaPenNib,
  FaUsers,
  FaQuestion,
  FaBriefcase,
  FaFileContract,
  FaLock,
} from "react-icons/fa";

// A simple decorative shape component for the background graphic
const AbstractShape = ({
  icon,
  size,
  color,
  top,
  right,
  left,
  bottom,
  ...rest
}) => (
  <Icon
    as={icon}
    position="absolute"
    boxSize={size}
    color={color}
    top={top}
    right={right}
    left={left}
    bottom={bottom}
    opacity={0.6}
    transform="rotate(-15deg)"
    {...rest}
  />
);

const Home = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.xl" py={4}>
        {/* Navigation Bar */}
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          w="100%"
          mb={{ base: 16, md: 32 }}
        >
          <Heading as="h1" size="md" color="gray.800" fontWeight="bold">
            Micro Justice
          </Heading>
          <HStack spacing={8}>
            <Button
              as={RouterLink}
              to="/"
              variant="link"
              color="gray.600"
              fontWeight="medium"
            >
              Our Mission
            </Button>
            <Button
              as={RouterLink}
              to="/"
              variant="link"
              color="gray.600"
              fontWeight="medium"
            >
              Blog
            </Button>
            <Button
              as={RouterLink}
              to="/login"
              variant="link"
              color="gray.600"
              fontWeight="medium"
            >
              Sign In
            </Button>
            <Button
              as={RouterLink}
              to="/"
              colorScheme="teal"
              variant="solid"
              size="md"
            >
              Get Started
            </Button>
          </HStack>
        </Flex>

        {/* Hero Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          w="100%"
        >
          {/* Left Side: Text Content */}
          <VStack
            align={{ base: "center", md: "flex-start" }}
            spacing={6}
            w={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h2"
              size="4xl"
              fontWeight="extrabold"
              lineHeight="1.2"
              fontFamily="'serif'"
              color="gray.800"
            >
              Small Acts.
              <br />
              Big Impact.
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="lg">
              A platform to share, witness, and support the everyday acts of
              justice that shape our world.
            </Text>
            <Button colorScheme="teal" size="lg" px={12} py={8} mt={4}>
              Join the Movement
            </Button>
          </VStack>

          {/* Right Side: Graphic Element */}
          <Box
            w={{ base: "100%", md: "45%" }}
            h={{ base: "300px", md: "450px" }}
            mt={{ base: 12, md: 0 }}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              position="absolute"
              w="80%"
              h="80%"
              bg="teal.400"
              borderRadius="lg"
              transform="rotate(8deg)"
              opacity={0.2}
            />
            <Box
              position="relative"
              w="90%"
              h="90%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* Abstract Icons */}
              <AbstractShape
                icon={FaBalanceScale}
                size="100px"
                color="teal.500"
                top="10%"
                left="15%"
              />
              <AbstractShape
                icon={FaPenNib}
                size="80px"
                color="gray.700"
                bottom="15%"
                right="20%"
                transform="rotate(20deg)"
              />
              <AbstractShape
                icon={FaUsers}
                size="90px"
                color="teal.600"
                top="40%"
                right="10%"
                transform="rotate(-5deg)"
              />
            </Box>
          </Box>
        </Flex>

        {/* Footer */}
        <Flex
          as="footer"
          justify="flex-start"
          align="center"
          w="100%"
          mt={{ base: 16, md: 32 }}
          py={6}
          borderTop="1px"
          borderColor="gray.200"
        >
          <HStack spacing={6}>
            <Button
              as={RouterLink}
              to="/help"
              variant="link"
              colorScheme="gray"
              size="sm"
              leftIcon={<Icon as={FaQuestion} color="gray.500" />}
            >
              Help
            </Button>
            <Button
              as={RouterLink}
              to="/status"
              variant="link"
              colorScheme="gray"
              size="sm"
              leftIcon={<Icon as={FaBalanceScale} color="gray.500" />}
            >
              Status
            </Button>
            <Button
              as={RouterLink}
              to="/about"
              variant="link"
              colorScheme="gray"
              size="sm"
              leftIcon={<Icon as={FaUsers} color="gray.500" />}
            >
              About
            </Button>
            <Button
              as={RouterLink}
              to="/careers"
              variant="link"
              colorScheme="gray"
              size="sm"
              leftIcon={<Icon as={FaBriefcase} color="gray.500" />}
            >
              Careers
            </Button>
            <Button
              as={RouterLink}
              to="/privacy"
              variant="link"
              colorScheme="gray"
              size="sm"
              leftIcon={<Icon as={FaLock} color="gray.500" />}
            >
              Privacy
            </Button>
            <Button
              as={RouterLink}
              to="/terms"
              variant="link"
              colorScheme="gray"
              size="sm"
              leftIcon={<Icon as={FaFileContract} color="gray.500" />}
            >
              Terms
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
