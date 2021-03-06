import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

export const LoadingUi = () => {
  return (
    <Stack>
      <Skeleton height="44px" borderRadius="md" />
      <Skeleton height="44px" borderRadius="md" />
      <Skeleton height="44px" borderRadius="md" />
    </Stack>
  );
};
