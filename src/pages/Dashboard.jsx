import { Box, Container, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BsClipboard } from "react-icons/bs";
import { CreateItem } from "../components/CreateItem";
import { Nav } from "../components/Nav";
import { TodoList } from "../components/TodoList";
import { useTodoContext } from "../context/TodoContext";
import moment from "moment";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
            <Box
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition=".5s"
              color="gray.400"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="20px"
            >
              <Icon as={BsClipboard} h="40px" w="40px" />
              <Text mt="10px">You don't have any to do</Text>
            </Box>
          )}
        </Container>
      </Stack>
    </Stack>
  );
};
