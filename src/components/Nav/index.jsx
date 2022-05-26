import { HStack, Icon, Stack, Text, useColorMode } from "@chakra-ui/react";
import {
  MdOutlineLogout,
  MdNightlight,
  MdOutlineLightMode,
} from "react-icons/md";
import React from "react";

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" mt="20px">
      <Stack>
        <Text>Mi logo</Text>
      </Stack>
      <HStack>
        <Icon as={MdOutlineLogout} />
        <Icon
          as={colorMode === "light" ? MdOutlineLightMode : MdNightlight}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};
