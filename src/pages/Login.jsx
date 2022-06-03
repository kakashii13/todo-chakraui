import { Container, Divider, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoginWithGoogle } from "../components/LoginWithGoogle";
import { Form } from "../components/FormUser";
import { AlertError } from "../components/Alert";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth(email, password);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login();
      navigate("/dashboard");
    } catch {
      setError("There was an error, try again.");
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <VStack justifyContent="center" h="100vh">
      <VStack>
        <Heading>Things</Heading>
        <Heading>ToDo</Heading>
      </VStack>
      <Container maxW="md">
        {error && <AlertError errorMessage={error} />}
        <Form
          isLogin
          loading={loading}
          handleSubmit={handleSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <Divider />
        <LoginWithGoogle setError={setError} />
      </Container>
    </VStack>
  );
};
