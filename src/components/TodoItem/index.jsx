import { Box, chakra, HStack, Icon, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";
import { useTodoContext } from "../../context/TodoContext";
import {
  MdDeleteOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const ChakraIcon = chakra(motion.i, {
  shouldForwardProp: isValidMotionProp,
});

export const TodoItem = ({ text, completed, index, id }) => {
  const { items, setItems } = useTodoContext();

  const handleDelete = () => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleComplete = () => {
    const newItems = [...items];
    newItems[index].completed = true;
    setItems(newItems);
  };
  return (
    <Box
      as={motion.li}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      layoutId={id}
      bg="white"
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
