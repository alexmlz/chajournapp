import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { logout } from "../services/user-service";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const NavBar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    logout(navigate);
  };
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image onClick={() => navigate("/")} src={logo} boxSize="60px" />
      <ColorModeSwitch />
      <Button onClick={() => onLogout()} colorScheme={"blue"}>
        <FormattedMessage
          id="logoutBtnText"
          defaultMessage="Abmelden"
        ></FormattedMessage>
      </Button>
    </HStack>
  );
};

export default NavBar;
