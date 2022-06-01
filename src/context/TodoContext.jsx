import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

const todoContext = createContext();

export const useTodoContext = () => useContext(todoContext);

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const { mapUser } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const normalizedUser = mapUser(user);
      setCurrentUser(normalizedUser);
    });
  }, []);

  useEffect(() => {
    const getUserTodos = () => {
      if (!currentUser) return;

      const db = getFirestore();
      const userRef = doc(db, "UsersTodo", currentUser.uid);
      onSnapshot(userRef, (doc) => {
        setItems(doc.data().todos);
      });
    };

    getUserTodos();
  }, [currentUser]);

  return (
    <todoContext.Provider value={{ items, setItems, currentUser }}>{children}</todoContext.Provider>
  );
};
