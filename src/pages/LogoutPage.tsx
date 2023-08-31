import { Button, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container centerContent>
        <Text>You are logged out</Text>
        <Button colorScheme="blue" onClick={() => navigate("/")}>
          Login
        </Button>
      </Container>
    </>
  );
};

export default LogoutPage;
