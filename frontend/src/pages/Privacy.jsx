import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Privacy() {
  return (
    <Container maxW="container.xl" py={16}>
      <Heading as="h1" size="xl" mb={4}>
        Privacy Policy
      </Heading>
      <Text mb={8}>
        This privacy policy ("Policy") describes how Microjustice International
        ("Microjustice International", "we", "us" or "our") collects, uses,
        shares and stores personal information of users of our website, located
        at microjustice.org (the "Site"). This Policy applies to the Site,
        applications, services, and tools (collectively "Services") regardless
        of how you access or use them.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        Information We Collect
      </Heading>
      <Text mb={8}>
        We collect information about you in various ways when you use our
        Services. We collect personal information you provide to us. For
        example, we collect information when you:
      </Text>

      <List spacing={3}>
        <ListItem>
          <Text>register an account or update your profile;</Text>
        </ListItem>
        <ListItem>
          <Text>use our Services;</Text>
        </ListItem>
        <ListItem>
          <Text>
            post information on our forums or other public areas of the Site;
          </Text>
        </ListItem>
        <ListItem>
          <Text>contact us with a question or request;</Text>
        </ListItem>
        <ListItem>
          <Text>use our official social media pages;</Text>
        </ListItem>
        <ListItem>
          <Text>sign up for our email newsletter;</Text>
        </ListItem>
      </List>

      <Heading as="h2" size="lg" mb={4}>
        Cookies
      </Heading>
      <Text mb={8}>
        We use cookies and other technologies to collect information about your
        use of the Services. A cookie is a small text file that is sent to your
        computer or mobile device when you visit a website or use an online
        service. Cookies may store a unique identifier, user preferences and
        other information.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        How We Use Your Information
      </Heading>
      <Text mb={8}>
        We use the information we collect from you to provide our Services,
        respond to your requests, improve our Services, and communicate with
        you.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        How We Share Your Information
      </Heading>
      <Text mb={8}>
        We do not share your personal information with third parties without
        your consent, except as described in this Policy. We may share your
        information with our affiliates (companies that are part of the same
        corporate group as us) and with our service providers who help us to
        provide our Services.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        Links to Other Websites
      </Heading>
      <Text mb={8}>
        Our Services may contain links to other websites or services that are
        not owned or controlled by us, including links to third-party websites
        such as social media websites.
      </Text>

      <Text>
        We are not responsible for the privacy practices of these third-party
        websites or services. We encourage you to be aware when you leave our
        Services and to read the privacy statements of each website and service
        you visit.
      </Text>

      <Flex justifyContent="flex-end" mt={8}>
        <Link href="/terms" isExternal>
          <Button rightIcon={<ExternalLinkIcon />} variant="link">
            Terms of Service
          </Button>
        </Link>
      </Flex>
    </Container>
  );
}
