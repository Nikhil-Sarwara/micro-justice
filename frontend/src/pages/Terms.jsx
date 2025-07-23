import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Link,
  Divider,
  Badge,
  SimpleGrid,
  GridItem,
  AspectRatio,
  Image,
  chakra,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Terms() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} align="start">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="2xl" mb={4}>
              Terms and Conditions
            </Heading>
            <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              leftIcon={<Icon as={FaFacebook} />}
            >
              Share on Facebook
            </Button>
          </Flex>

          <Text>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern your relationship with us in relation to this
            website.
          </Text>

          <Divider />

          <Heading as="h2" size="lg" mb={4}>
            Use of Site
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            <GridItem>
              <AspectRatio ratio={1}>
                <Image
                  src="https://picsum.photos/200/200"
                  alt="Picture of the author"
                  borderRadius="lg"
                />
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={[1, 2]}>
              <Text>
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </Text>
            </GridItem>
          </SimpleGrid>

          <Divider />

          <Heading as="h2" size="lg" mb={4}>
            Privacy Policy
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Badge colorScheme="green">Personal data</Badge>
              <Text>
                We are committed to ensuring that your privacy is protected.
                Should we ask you to provide certain information by which you
                can be identified when using this website, then you can be
                assured that it will only be used in accordance with this
                privacy statement.
              </Text>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green">Cookies</Badge>
              <Text>
                We use cookies to improve your experience on our website. By
                continuing to use this website, you are agreeing to our use of
                cookies.
              </Text>
            </ListItem>
          </List>

          <chakra.p>
            We may change this policy from time to time by updating this page.
            You should check this page from time to time to ensure that you are
            happy with any changes.
          </chakra.p>

          <chakra.p>This policy is effective from 1st January 2023.</chakra.p>

          <Flex justify="space-between" align="center">
            <Link href="#" color="gray.600" fontWeight="medium">
              Back to top
            </Link>
            <Button
              variant="outline"
              colorScheme="blue"
              size="sm"
              rightIcon={<Icon as={FaTwitter} />}
            >
              Tweet about us
            </Button>
            <Button
              variant="outline"
              colorScheme="pink"
              size="sm"
              rightIcon={<Icon as={FaInstagram} />}
            >
              Follow us on Instagram
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
