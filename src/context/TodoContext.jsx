import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

const todoContext = createContext();

export const useTodoContext = () => useContext(todoContext);

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [todosLoading, setTodosLoading] = useState(false);
  const { mapUser } = useAuth();

  useEffect(() => {
    const onsubscriber = onAuthStateChanged(auth, (user) => {
      const normalizedUser = mapUser(user);
      setCurrentUser(normalizedUser);
    });
    return onsubscriber;
  }, []);

  useEffect(() => {
    const getUserTodos = () => {
      if (!currentUser) return;

      setTodosLoading(true);
      const db = getFirestore();
      const userRef = doc(db, "UsersTodo", currentUser.uid);
      onSnapshot(userRef, (doc) => {
        setItems(doc.data().todos);
      });
      setTodosLoading(false);
    };

    getUserTodos();
  }, [currentUser]);

  return (
    <todoContext.Provider
      value={{ items, setItems, currentUser, todosLoading }}
    >
      {children}
    </todoContext.Provider>
  );
};
