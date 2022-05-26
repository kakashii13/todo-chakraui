import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      "html, body, #root": {
        bg: props.colorMode === "light" ? "gray.50" : "gray.800",
        height: "100%",
      },
      svg: {
        cursor: "pointer",
      },
    }),
  },
});
