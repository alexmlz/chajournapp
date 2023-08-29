import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text>You are logged out</Text>
      <Button onClick={() => navigate("/")}>Login</Button>
    </>
  );
};

export default LogoutPage;
