import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDec60YOb3uiWwTabx9UlvGziF0N85K9Rw",
  authDomain: "thingstodo-afde3.firebaseapp.com",
  projectId: "thingstodo-afde3",
  storageBucket: "thingstodo-afde3.appspot.com",
  messagingSenderId: "1073463689175",
  appId: "1:1073463689175:web:1630de27e2af81f2309592",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};

export const auth = getAuth(app);
