import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body, #root": {
        bg: "gray.50",
        height: "100%",
      },
      svg: {
        cursor: "pointer",
      },
    },
  },
});
