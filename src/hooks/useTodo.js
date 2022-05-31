import { useTodoContext } from "../context/TodoContext";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export const useTodo = ({ index }) => {
  const { items, setItems, currentUser } = useTodoContext();

  const handleDelete = async () => {
    const newItems = [...items];
    newItems.splice(index, 1);

    const db = getFirestore();
    const userRef = doc(db, "UsersTodo", currentUser.uid);
    await updateDoc(userRef, {
      todos: newItems,
    });
  };

  const handleComplete = () => {
    const newItems = [...items];
    newItems[index].complete = true;
    setItems(newItems);

    setTimeout(() => {
      handleDelete();
    }, 500);
  };

  return { handleDelete, handleComplete };
};
