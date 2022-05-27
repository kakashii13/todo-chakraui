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
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.900");
  const border = useColorModeValue("gray.100", "gray.700");

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
          <HStack justifyContent="space-between" my="20px">
            <Checkbox>Remember Me</Checkbox>
            <Link to="/forgot-password">
              <Text color="blue.500">Forgot password?</Text>
            </Link>
          </HStack>
          <Button colorScheme="twitter" minW="100%">
            Login
          </Button>
          <HStack justifyContent="center" my="20px">
            <Text color={color}>Don't have an account?</Text>
            <Link to="/signup">
              <Text color="blue.500">Create one!</Text>
            </Link>
          </HStack>
        </FormControl>
        <Divider />
        <VStack alignItems="center" mt="20px">
          <Text>OR</Text>
          <Button
            bg={bg}
            color={color}
            leftIcon={<FcGoogle />}
            border="1px"
            borderColor={border}
          >
            Sign in white Google
          </Button>
        </VStack>
      </Container>
    </VStack>
  );
};
