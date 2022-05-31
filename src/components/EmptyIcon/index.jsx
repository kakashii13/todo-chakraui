import { Box, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BsClipboard } from "react-icons/bs";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const EmptyIcon = () => {
  return (
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
  );
};
