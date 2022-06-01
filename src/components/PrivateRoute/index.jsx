import React from "react";
import { Navigate } from "react-router";
import { useTodoContext } from "../../context/TodoContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useTodoContext();

  return currentUser !== null ? children : <Navigate to="/login" />;
};
