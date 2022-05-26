import {
  FormControl,
  FormErrorMessage,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const CreateItem = () => {
  const { items, setItems } = useTodoContext();
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState({
    id: "",
    text: "",
    complete: false,
  });

  const bg = useColorModeValue("gray.100", "gray.900");

  const handleChange = (e) => {
    if (todo.text !== "") {
      setError(false);
    }
    setTodo({ ...todo, text: e.target.value });
  };

  const createTodo = (e) => {
    if (e.key !== "Enter") return;
    if (todo.text === "") {
      setError(true);
    } else {
      setError(false);
      const newItems = [...items];
      newItems.unshift({ ...todo, id: uuidv4() });
      setItems(newItems);
      setTodo({ ...todo, id: "", text: "" });
    }
  };

  return (
    <FormControl isInvalid={error}>
      <Input
        my="10px"
        placeholder="Make a todo 👊"
        bg={bg}
        value={todo.text}
        onChange={handleChange}
        onKeyDown={createTodo}
      />
      {error && <FormErrorMessage>You must write something.</FormErrorMessage>}
    </FormControl>
  );
};
