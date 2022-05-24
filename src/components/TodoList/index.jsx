import { List } from "@chakra-ui/react";
import React from "react";
import { TodoItem } from "../TodoItem";
import { useTodoContext } from "../../context/TodoContext";

export const TodoList = () => {
  const { items } = useTodoContext();
  return (
    <List>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} confirm={item.confirm} />
      ))}
    </List>
  );
};
