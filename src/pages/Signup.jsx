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

  return (
    <VStack justifyContent="center" h="100vh">
      <VStack>
        <Heading>Things</Heading>
        <Heading>ToDo</Heading>
      </VStack>
      <Container maxW="md">
        <FormControl>
          <Input placeholder="Email" my="10px" bg={bg} boxShadow="sm" />
          <Input placeholder="Password" my="10px" bg={bg} boxShadow="sm" />
          <Button colorScheme="twitter" minW="100%" mt="10px">
            Signup
          </Button>
          <HStack justifyContent="center" mt="10px">
            <Text color="blackAlpha.600">You have already an account?</Text>
            <Link to="/login">
              <Text color="blue.500">Login</Text>
            </Link>
          </HStack>
        </FormControl>
      </Container>
    </VStack>
  );
};
