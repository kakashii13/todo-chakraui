import {
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Input,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";

const INITIAL_TODOS = [
  {
    text: "Buy a food",
    completed: false,
  },
  {
    text: "Walking the dog",
    completed: true,
  },
];

export const Home = () => {
  return (
    <Container>
      <Stack spacing={20}>
        <HStack mt="20px" justifyContent="space-between" alignItems="center">
          <VStack spacing={0} fontWeight="700">
            <Text>Things</Text>
            <Text>Todo</Text>
          </VStack>
          <HStack spacing={5}>
            <Link to="/login">
              <Text>Login</Text>
            </Link>
            <Link to="/signup">
              <Button colorScheme="twitter">Signup</Button>
            </Link>
          </HStack>
        </HStack>
        <Stack>
          <Heading bgGradient="linear(to-r, #9964ce, #fc8600)" bgClip="text">
            Hello User!
          </Heading>
          <VStack>
            <Input isDisabled my="10px" placeholder="Make a todo 👊" bg={bg} />
            <List w="100%">
              {INITIAL_TODOS.map((item) => (
                <ListItem
                  key={item.text}
                  borderRadius="md"
                  my="10px"
                  p="10px"
                  boxShadow="base"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack>
                    <Icon
                      as={item.completed ? MdCheckBox : MdCheckBoxOutlineBlank}
                    />
                    <Text maxW="sm" as={item.completed ? "s" : ""}>
                      {item.text}
                    </Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </VStack>
        </Stack>
      </Stack>
    </Container>
  );
};
