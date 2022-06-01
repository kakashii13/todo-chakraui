import { Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/TodoContext";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { getFirestoreApp } from "./firebase/config";
import { PrivateRoute } from "./components/PrivateRoute";
import { ForgotPass } from "./pages/ForgotPass";
import { Home } from "./pages/Home";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

getFirestoreApp();

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Container maxW="3xl">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPass />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
