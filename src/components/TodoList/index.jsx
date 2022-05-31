import { Box } from "@chakra-ui/react";
import React from "react";
import { TodoItem } from "../TodoItem";
import { useTodoContext } from "../../context/TodoContext";
import { AnimatePresence, motion } from "framer-motion";
export const TodoList = () => {
  const { items } = useTodoContext();
  return (
    <Box as={motion.ul}>
      <AnimatePresence>
        {items?.map((item, index) => (
          <TodoItem
            key={item.id}
            text={item.text}
            complete={item.complete}
            index={index}
            id={item.id}
          />
        ))}
      </AnimatePresence>
    </Box>
  );
};
