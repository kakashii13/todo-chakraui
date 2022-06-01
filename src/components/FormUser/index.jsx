import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  HStack,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Form = ({
  handleSubmit,
  isLogin,
  loading,
  setPassword,
  setEmail,
  email,
  password,
}) => {
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.900");
  return (
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
        {isLogin && (
          <HStack justifyContent="space-between" mt="15px">
            <Checkbox>Remember Me</Checkbox>
            <Link to="/forgot-password">
              <Text color="blue.500">Forgot password?</Text>
            </Link>
          </HStack>
        )}
        <Button type="submit" colorScheme="twitter" minW="100%" isLoading={loading} my="20px">
          {isLogin ? "Log in" : "Sign up"}
        </Button>
        <HStack justifyContent="center" my="20px">
          <Text color={color}>
            {isLogin ? "Don't have an account?" : "You have already an account?"}
          </Text>
          <Link to={isLogin ? "/signup" : "/login"}>
            <Text color="blue.500">{isLogin ? "Create one!" : "Login"}</Text>
          </Link>
        </HStack>
      </FormControl>
    </form>
  );
};
