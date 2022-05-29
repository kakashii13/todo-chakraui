import {
  Button,
  Checkbox,
  Container,
  Divider,
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
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signWithGoogle, login } = useAuth(email, password);

  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.900");
  const border = useColorModeValue("gray.200", "gray.700");
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    try {
      await signWithGoogle();
      navigate("/");
    } catch {
      error("No se puede logear con esta cuenta");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login();
      navigate("/");
    } catch {
      setError("No se ha podido crear la cuenta");
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
            <HStack justifyContent="space-between" my="20px">
              <Checkbox>Remember Me</Checkbox>
              <Link to="/forgot-password">
                <Text color="blue.500">Forgot password?</Text>
              </Link>
            </HStack>
            <Button
              type="submit"
              colorScheme="twitter"
              minW="100%"
              isLoading={loading}
            >
              Login
            </Button>
            <HStack justifyContent="center" my="20px">
              <Text color={color}>Don't have an account?</Text>
              <Link to="/signup">
                <Text color="blue.500">Create one!</Text>
              </Link>
            </HStack>
          </FormControl>
        </form>
        <Divider />
        <VStack alignItems="center" mt="20px">
          <Text>OR</Text>
          <Button
            bg={bg}
            color={color}
            leftIcon={<FcGoogle />}
            border="1px"
            borderColor={border}
            onClick={handleLoginWithGoogle}
          >
            Sign in with Google
          </Button>
        </VStack>
      </Container>
    </VStack>
  );
};
