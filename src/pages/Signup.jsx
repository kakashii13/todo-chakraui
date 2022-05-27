import {
  Button,
  Checkbox,
  Container,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.900");

  return (
    <VStack justifyContent="center" h="100vh">
      <VStack>
        <Heading>Things</Heading>
        <Heading>ToDo</Heading>
      </VStack>
      <Container maxW="md">
        <FormControl>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            my="10px"
            bg={bg}
            boxShadow="sm"
            isRequired
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            my="10px"
            bg={bg}
            boxShadow="sm"
          />
          <Button colorScheme="twitter" minW="100%" mt="10px">
            Signup
          </Button>
          <HStack justifyContent="center" mt="10px">
            <Text color={color}>You have already an account?</Text>
            <Link to="/login">
              <Text color="blue.500">Login</Text>
            </Link>
          </HStack>
        </FormControl>
      </Container>
    </VStack>
  );
};
