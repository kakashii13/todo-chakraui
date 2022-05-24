import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CreateItem } from "../components/CreateItem";
import { Nav } from "../components/Nav";
import { TodoList } from "../components/TodoList";

export const Dashboard = () => {
  return (
    <Stack spacing={20}>
      <Nav />
      <Stack>
        <Container>
          <Heading bgGradient="linear(to-r, #9964ce, #fc8600)" bgClip="text">
            Hello user!
          </Heading>
          <Text>Today is Tuesday, May 24</Text>
          <CreateItem />
          <TodoList />
        </Container>
      </Stack>
    </Stack>
  );
};
