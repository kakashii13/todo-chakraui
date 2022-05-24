import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/TodoContext";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Container className="App" maxW="3xl">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Container>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
