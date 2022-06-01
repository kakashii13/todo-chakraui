import { Button, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export const LoginWithGoogle = () => {
  const { signWithGoogle } = useAuth();

  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.700");
  const bgHover = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.900");
  const border = useColorModeValue("gray.200", "gray.700");

  const handleLoginWithGoogle = async () => {
    try {
      await signWithGoogle();
      navigate("/dashboard");
    } catch {
      error("No se puede logear con esta cuenta");
    }
  };
  return (
    <VStack alignItems="center" mt="20px">
      <Text>OR</Text>
      <Button
        bg={bg}
        color={color}
        leftIcon={<FcGoogle />}
        border="1px"
        borderColor={border}
        onClick={handleLoginWithGoogle}
        _hover={{
          bg: bgHover,
        }}
      >
        Sign in with Google
      </Button>
    </VStack>
  );
};
