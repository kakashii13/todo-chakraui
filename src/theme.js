import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`,
  },
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
      li: {
        bg: props.colorMode === "light" ? "white" : "gray.700",
      },
      input: {
        bg: props.colorMode === "light" ? "gray.100" : "gray.900",
      },
    }),
  },
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: "white",
          _hover: {
            backgroundColor: `${props.colorScheme}.600`,
          },
        }),
      },
    },
  },
});
