import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuth = (email, password) => {
  const signup = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const mapUser = (user) => {
    if (!user) return;
    const { displayName, photoURL, email, uid } = user;
    return { displayName, photoURL, email, uid };
  };

  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPass = () => {
    return sendPasswordResetEmail(auth, email);
  };

  return { signWithGoogle, mapUser, logout, login, signup, resetPass };
};
