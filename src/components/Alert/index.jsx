import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export const AlertError = ({ errorMessage }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{errorMessage}</AlertTitle>
    </Alert>
  );
};
