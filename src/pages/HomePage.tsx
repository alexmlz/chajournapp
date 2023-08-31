import { useState } from "react";
import useUsers from "../hooks/useUsers";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import JournalGrid from "../components/JournalGrid";
import Login from "../components/Login";
import Register from "../components/Register";

const HomePage = () => {
  const [login, setLogin] = useState(true);
  //const [currentUser, setCurrentUser] = useState();
  useUsers();
  const RegisterLogin = () => {
    return (
      <Container>
        {login ? (
          <>
            <Text>If you do not have an account yet, Textlease register!</Text>
            <HStack justifyContent={"center"}>
              <Button colorScheme="blue" onClick={() => setLogin(false)}>
                Register
              </Button>
            </HStack>
            <Login />
          </>
        ) : (
          <>
            <HStack justifyContent={"center"}>
              <Button colorScheme="blue" onClick={() => setLogin(true)}>
                Login
              </Button>
            </HStack>
            <Register />
          </>
        )}
      </Container>
    );
  };

  return (
    <Box>
      <RegisterLogin></RegisterLogin>
    </Box>
  );
};

export default HomePage;
