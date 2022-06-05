import { FormControl, FormErrorMessage, Input, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

export const CreateItem = () => {
  const { items, currentUser, userName } = useTodoContext();
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState({
    id: uuidv4(),
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

  const createTodo = async (e) => {
    if (e.key !== "Enter") return;
    if (todo.text === "") {
      setError(true);
    } else {
      setError(false);
      const userTodos = {
        user: currentUser.email,
        userName: userName || currentUser.displayName,
        todos: [todo],
      };

      const db = getFirestore();
      const userRef = doc(db, "UsersTodo", currentUser.uid);

      if (items) {
        const newArray = [...items];
        newArray.unshift({ ...todo, id: uuidv4() });
        await updateDoc(userRef, {
          todos: newArray,
        });
      } else {
        await setDoc(userRef, userTodos);
      }
    }
    setTodo({ text: "", complete: false });
  };

  return (
    <FormControl isInvalid={error}>
      <Input
        autoComplete="off"
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
