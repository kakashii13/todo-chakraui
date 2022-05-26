import {
  Button,
  Checkbox,
  Container,
  FormControl,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <VStack justifyContent="center" h="100vh">
      <VStack>
        <Heading>Things</Heading>
        <Heading>ToDo</Heading>
      </VStack>
      <Container maxW="md">
        <FormControl>
          <Input placeholder="Email" my="10px" bg={bg} boxShadow="sm" />
          <Input
            type="password"
            placeholder="Password"
            my="10px"
            bg={bg}
            boxShadow="sm"
          />
          <HStack justifyContent="space-between" my="20px">
            <Checkbox>Remember Me</Checkbox>
            <Link to="/forgot-password">
              <Text color="blue.500">Forgot password?</Text>
            </Link>
          </HStack>
          <Button colorScheme="twitter" minW="100%">
            Login
          </Button>
          <HStack justifyContent="center" mt="10px">
            <Text color="blackAlpha.600">Don't have an account?</Text>
            <Link to="/signup">
              <Text color="blue.500">Create one!</Text>
            </Link>
          </HStack>
        </FormControl>
      </Container>
    </VStack>
  );
};
