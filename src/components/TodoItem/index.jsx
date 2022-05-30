import { Box, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useTodoContext } from "../../context/TodoContext";
import {
  MdDeleteOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const TodoItem = ({ text, completed, index, id }) => {
  const { items, setItems, currentUser } = useTodoContext();

  const bg = useColorModeValue("white", "gray.700");

  const handleDelete = async () => {
    const newItems = [...items];
    newItems.splice(index, 1);

    const db = getFirestore();
    const userRef = doc(db, "UsersTodo", currentUser.uid);
    await updateDoc(userRef, {
      todos: newItems,
    });
  };

  const handleComplete = () => {
    const newItems = [...items];
    newItems[index].completed = true;
    setItems(newItems);

    setTimeout(() => {
      handleDelete();
    }, 500);
  };
  return (
    <Box
      as={motion.li}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      layoutId={id}
      bg={bg}
      borderRadius="md"
      my="10px"
      p="10px"
      boxShadow="base"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack>
        <Box
          as={motion.div}
          onClick={handleComplete}
          whileTap={{ scale: 1.3 }}
          display="flex"
          alignItems="center"
        >
          <Icon as={completed ? MdCheckBox : MdCheckBoxOutlineBlank} />
        </Box>
        <Text maxW="sm" as={completed ? "s" : ""}>
          {text}
        </Text>
      </HStack>
      <Icon as={MdDeleteOutline} mr="10px" onClick={handleDelete} />
    </Box>
  );
};
