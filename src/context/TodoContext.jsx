import { createContext, useContext, useEffect, useState } from "react";

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
  const [items, setItems] = useState(INITIAL_TODO);

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <todoContext.Provider value={{ items, setItems }}>
      {children}
    </todoContext.Provider>
  );
};
