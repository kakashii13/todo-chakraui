import { Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/TodoContext";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { getFirestoreApp } from "./firebase/config";

getFirestoreApp();

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Container maxW="3xl">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Container>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
