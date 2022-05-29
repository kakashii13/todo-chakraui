import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

const todoContext = createContext();

export const useTodoContext = () => useContext(todoContext);

const INITIAL_TODO = [
  {
    id: "312hj314",
    text: "Este es un item de prueba",
    completed: false,
  },
  {
    id: "31213sf2hj314",
    text: "Este es un item de prueba 2",
    completed: false,
  },
];

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
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

      const db = getFirestore();
      const userRef = doc(db, "UsersTodo", currentUser.uid);
      onSnapshot(userRef, (doc) => {
        setItems(doc.data().todos);
      });
    };

    getUserTodos();
  }, [currentUser]);

  return (
    <todoContext.Provider value={{ items, setItems, currentUser }}>
      {children}
    </todoContext.Provider>
  );
};
