import { Container, Heading, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import { CreateItem } from "../components/CreateItem";
import { Nav } from "../components/Nav";
import { TodoList } from "../components/TodoList";
import { useTodoContext } from "../context/TodoContext";
import { EmptyIcon } from "../components/EmptyIcon";
import { LoadingUi } from "../components/LoadingUi";

export const Dashboard = () => {
  const { items, currentUser, userName } = useTodoContext();

  return (
    <Stack spacing={20}>
      <Nav />
      <Stack>
        <Container>
          <Heading bgGradient="linear(to-r, #9964ce, #fc8600)" bgClip="text">
            {currentUser === undefined ? (
              <Skeleton h="40px" borderRadius="md" />
            ) : (
              `Hello, ${currentUser?.displayName ? currentUser?.displayName : userName}`
            )}
          </Heading>
          <CreateItem />
          {items === null ? (
            <LoadingUi />
          ) : items !== undefined && items?.length !== 0 ? (
            <TodoList />
          ) : (
            <EmptyIcon />
          )}
        </Container>
      </Stack>
    </Stack>
  );
};
