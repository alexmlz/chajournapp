import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { logout } from "../services/user-service";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const NavBar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    logout(navigate);
  };
  return (
    <>
      <HStack>
        <Image
          borderRadius="full"
          onClick={() => navigate("/")}
          src={logo}
          boxSize="60px"
        />
        <NavLink to={"/journals"}>Journal</NavLink>
        <Spacer />

        <ColorModeSwitch />
        <Button onClick={() => onLogout()} colorScheme={"blue"}>
          <FormattedMessage
            id="logoutBtnText"
            defaultMessage="Abmelden"
          ></FormattedMessage>
        </Button>
      </HStack>
    </>
  );
};

export default NavBar;
