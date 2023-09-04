import { useState } from "react";
import useUsers from "../hooks/useUsers";
import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import Login from "../components/Login";
import Register from "../components/Register";
import { FormattedMessage } from "react-intl";

const HomePage = () => {
  const [login, setLogin] = useState(true);
  useUsers();
  const RegisterLogin = () => {
    return (
      <Container>
        {login ? (
          <>
            <Text align={"center"}>
              <FormattedMessage id="registerText"></FormattedMessage>
            </Text>
            <HStack justifyContent={"center"}>
              <Button colorScheme="blue" onClick={() => setLogin(false)}>
                <FormattedMessage
                  id="registerBtnText"
                  defaultMessage="Registrieren"
                ></FormattedMessage>
              </Button>
            </HStack>
            <Login />
          </>
        ) : (
          <>
            <Text align={"center"}>
              <FormattedMessage id="registerFreeText"></FormattedMessage>
            </Text>
            <HStack justifyContent={"center"}>
              <Button colorScheme="blue" onClick={() => setLogin(true)}>
                <FormattedMessage
                  id="loginBtnText"
                  defaultMessage="Einloggen"
                ></FormattedMessage>
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
