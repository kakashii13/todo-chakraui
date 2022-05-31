import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CreateItem } from "../components/CreateItem";
import { Nav } from "../components/Nav";
import { TodoList } from "../components/TodoList";
import { useTodoContext } from "../context/TodoContext";
import { EmptyIcon } from "../components/EmptyIcon";
import { LoadingUi } from "../components/LoadingUi";
import moment from "moment";

export const Dashboard = () => {
  const { items, currentUser, todosLoading } = useTodoContext();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = moment().format("MMM Do YYYY");
    setCurrentDate(date);
  }, []);

  return (
    <Stack spacing={20}>
      <Nav />
      <Stack>
        <Container>
          <Heading bgGradient="linear(to-r, #9964ce, #fc8600)" bgClip="text">
            {`Hello, ${
              currentUser?.displayName
                ? currentUser?.displayName
                : currentUser?.email
            }`}
          </Heading>
          <Text>{`Today is ${currentDate}`}</Text>
          <CreateItem />
          {todosLoading ? (
            <LoadingUi />
          ) : items?.length !== 0 ? (
            <TodoList />
          ) : (
            <EmptyIcon />
          )}
        </Container>
      </Stack>
    </Stack>
  );
};
