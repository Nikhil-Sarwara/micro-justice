import React from "react";
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <Flex bg="teal.500" color="white" p={4} align="center">
      <Text fontWeight="bold" fontSize="lg">
        MicroJustice
      </Text>
      <Spacer />
      {isAuthenticated ? (
        <>
          <Text mr={4}>Hello, {user.name || user.email}</Text>
          <Button onClick={logout} colorScheme="red" size="sm">
            Logout
          </Button>
        </>
      ) : (
        <Text>Please log in</Text>
      )}
    </Flex>
  );
};

export default Navbar;
