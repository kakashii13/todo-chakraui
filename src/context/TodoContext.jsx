import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

const todoContext = createContext();

export const useTodoContext = () => useContext(todoContext);

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
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
        const todos = doc.data()?.todos;
        if (todos) {
          setItems(todos);
        } else {
          setItems(undefined);
        }
      });
    };

    getUserTodos();
  }, [currentUser]);

  return (
    <todoContext.Provider value={{ items, setItems, currentUser, userName, setUserName }}>
      {children}
    </todoContext.Provider>
  );
};
