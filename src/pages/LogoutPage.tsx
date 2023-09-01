import { Button, Container, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container centerContent>
        <Text>
          <FormattedMessage id="loggedOutTex"></FormattedMessage>
        </Text>
        <Button colorScheme="blue" onClick={() => navigate("/")}>
          <FormattedMessage
            id="loginBtnText"
            defaultMessage="Anmelden"
          ></FormattedMessage>
        </Button>
      </Container>
    </>
  );
};

export default LogoutPage;
