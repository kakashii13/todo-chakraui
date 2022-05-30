import {
  Button,
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
import { useAuth } from "../hooks/useAuth";

export const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { resetPass } = useAuth(email);

  const bg = useColorModeValue("white", "gray.700");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await resetPass();
      navigate("/login");
    } catch {
      setError("Ha ocurrido un error");
      setTimeout(() => {
        setLoading(false);
        setError("");
      }, 1000);
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

            <Button
              type="submit"
              colorScheme="twitter"
              minW="100%"
              isLoading={loading}
              mt="10px"
            >
              Reset Password
            </Button>
            <HStack justifyContent="center" my="20px">
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
