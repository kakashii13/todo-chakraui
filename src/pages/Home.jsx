import {
  Button,
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

export const Home = () => {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Stack>
      <HStack>
        <Text>Things todo</Text>
        <HStack>
          <Link to="/login">
            <Text>Login</Text>
          </Link>
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
        </HStack>
      </HStack>
      <Stack>
        <Heading>Hello User!</Heading>
        <VStack>
          <Input my="10px" placeholder="Make a todo 👊" bg={bg} />
        </VStack>
      </Stack>
    </Stack>
  );
};
