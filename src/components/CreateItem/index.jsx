import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const CreateItem = () => {
  const { items, setItems } = useTodoContext();
  const [todo, setTodo] = useState({
    id: "",
    text: "",
    complete: false,
  });

  const handleChange = (e) => {
    if (e.key !== "Enter") return;
    const newItems = [...items];
    newItems.push({ ...todo, id: uuidv4() });
    setItems(newItems);
    setTodo({ ...todo, id: "", text: "" });
  };
  return (
    <Input
      my="10px"
      placeholder="Make a todo 👊"
      bg="gray.100"
      value={todo.text}
      onChange={(e) => setTodo({ ...todo, text: e.target.value })}
      onKeyDown={handleChange}
    />
  );
};
