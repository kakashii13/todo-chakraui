import {
  Button,
  Container,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth(email, password);
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.900");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signup();
      navigate("/");
    } catch {
      setError("Ocurrio un error");
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <VStack justifyContent="center" h="100vh">
      <VStack>
        <Heading>Things</Heading>
        <Heading>ToDo</Heading>
      </VStack>
      <Container maxW="md">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input
              placeholder="Email"
              type="email"
              id="email"
              my="10px"
              bg={bg}
              boxShadow="sm"
              isRequired
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              my="10px"
              bg={bg}
              boxShadow="sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submits"
              colorScheme="twitter"
              minW="100%"
              mt="10px"
              isLoading={loading}
            >
              Signup
            </Button>
            <HStack justifyContent="center" mt="10px">
              <Text color={color}>You have already an account?</Text>
              <Link to="/login">
                <Text color="blue.500">Login</Text>
              </Link>
            </HStack>
          </FormControl>
        </form>
      </Container>
    </VStack>
  );
};
