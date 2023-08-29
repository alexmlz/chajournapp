import { useState } from "react";
import useUsers from "../hooks/useUsers";
import { Box, Button, Grid, GridItem, Show } from "@chakra-ui/react";
import JournalGrid from "../components/JournalGrid";
import Login from "../components/Login";
import Register from "../components/Register";

const HomePage = () => {
  const [login, setLogin] = useState(true);
  //const [currentUser, setCurrentUser] = useState();
  useUsers();
  const RegisterLogin = () => {
    return (
      <Box>
        {login ? (
          <>
            <Login />
            <p>If you do not have an account yet, please register!</p>
            <Button onClick={() => setLogin(false)}>Register</Button>
          </>
        ) : (
          <>
            <Register />
            <Button onClick={() => setLogin(true)}>Login</Button>
          </>
        )}
      </Box>
    );
  };

  return (
    <Box>
      <RegisterLogin></RegisterLogin>
    </Box>
  );
};

export default HomePage;
