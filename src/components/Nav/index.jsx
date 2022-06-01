import { Avatar, HStack, Icon, Stack, useColorMode } from "@chakra-ui/react";
import { MdOutlineLogout, MdNightlight, MdOutlineLightMode } from "react-icons/md";
import React from "react";
import { useTodoContext } from "../../context/TodoContext";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser } = useTodoContext();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      navigate("/");
    } catch {
      ("error");
    }
  };

  return (
    <HStack justifyContent="space-between" mt="20px">
      <Stack>
        <Avatar src={currentUser?.photoURL} size="sm" />
      </Stack>
      <HStack>
        <Icon as={MdOutlineLogout} onClick={handleLogout} h="20px" w="20px" />
        <Icon
          as={colorMode === "light" ? MdOutlineLightMode : MdNightlight}
          onClick={toggleColorMode}
          h="20px"
          w="20px"
        />
      </HStack>
    </HStack>
  );
};
