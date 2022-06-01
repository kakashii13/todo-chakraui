import { Container, Divider, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/FormUser";
import { LoginWithGoogle } from "../components/LoginWithGoogle";
import { useAuth } from "../hooks/useAuth";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth(email, password);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signup();
      navigate("/dashboard");
    } catch {
      setError("Ocurrio un error");
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <VStack justifyContent="center" h="100vh">
      <VStack>
        <Heading>Things</Heading>
        <Heading>ToDo</Heading>
      </VStack>
      <Container maxW="md">
        <Form
          loading={loading}
          handleSubmit={handleSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <Divider />
        <LoginWithGoogle />
      </Container>
    </VStack>
  );
};
