import { Box, Checkbox } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const TodoItem = ({ text, confirm }) => {
  return (
    <Box
      as={motion.li}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition="0.3s"
      bg="white"
      borderRadius="md"
      my="10px"
      boxShadow="sm"
    >
      <Checkbox p="10px">{text}</Checkbox>
    </Box>
  );
};
