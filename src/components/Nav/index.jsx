import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import {
  MdOutlineLogout,
  MdNightlight,
  MdOutlineLightMode,
} from "react-icons/md";
import React from "react";

export const Nav = () => {
  return (
    <HStack justifyContent="space-between" mt="20px">
      <Stack>
        <Text>Mi logo</Text>
      </Stack>
      <HStack>
        <Icon as={MdOutlineLogout} />
        <Icon as={MdOutlineLightMode} />
      </HStack>
    </HStack>
  );
};
