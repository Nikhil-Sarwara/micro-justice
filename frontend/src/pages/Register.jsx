import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Example API request: POST /api/auth/register with JSON body { name: "John Doe", email: "john@example.com", password: "secret" }
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        register(data.user);
        navigate("/");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred while registering");
    }
  };

  return (
    <Box p={6} borderRadius="md" boxShadow="sm" mt={4} maxWidth="sm" mx="auto">
      <form onSubmit={handleRegister}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={error}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </FormControl>
          <FormControl isInvalid={error}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </FormControl>
          <FormControl isInvalid={error}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <FormHelperText color="red.500">{error}</FormHelperText>}
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </VStack>
        <Text mt={4} fontSize="sm" color="gray.600">
          Already have an account?{" "}
          <Link to="/login" color="blue.500">
            Login
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default Register;
