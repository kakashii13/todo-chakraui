import { Container, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CreateItem } from "../components/CreateItem";
import { Nav } from "../components/Nav";
import { TodoList } from "../components/TodoList";
import { useTodoContext } from "../context/TodoContext";
import { EmptyIcon } from "../components/EmptyIcon";
import { LoadingUi } from "../components/LoadingUi";
import dayjs from "dayjs";

export const Dashboard = () => {
  const { items, currentUser } = useTodoContext();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const handleDate = () => {
      const date = dayjs().format("DD MMM YYYY");
      setCurrentDate(date);
    };
    return handleDate;
  }, []);

  return (
    <Stack spacing={20}>
      <Nav />
      <Stack>
        <Container>
          <Heading bgGradient="linear(to-r, #9964ce, #fc8600)" bgClip="text">
            {currentUser === undefined ? (
              <Skeleton h="40px" borderRadius="md" />
            ) : (
              `Hello, ${currentUser?.displayName ? currentUser?.displayName : currentUser?.email}`
            )}
          </Heading>
          <Text mt="10px">{`Today is ${currentDate}`}</Text>
          <CreateItem />
          {items === undefined ? <LoadingUi /> : items?.length !== 0 ? <TodoList /> : <EmptyIcon />}
        </Container>
      </Stack>
    </Stack>
  );
};
