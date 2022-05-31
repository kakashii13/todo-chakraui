import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import {
  MdDeleteOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";
import { useTodo } from "../../hooks/useTodo";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const TodoItem = ({ text, complete, index, id }) => {
  const { handleComplete, handleDelete } = useTodo({
    index,
  });

  return (
    <Box
      as={motion.li}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      layoutId={id}
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
          <Icon as={complete ? MdCheckBox : MdCheckBoxOutlineBlank} />
        </Box>
        <Text maxW="sm" as={complete ? "s" : ""}>
          {text}
        </Text>
      </HStack>
      <Icon as={MdDeleteOutline} mr="10px" onClick={handleDelete} />
    </Box>
  );
};
