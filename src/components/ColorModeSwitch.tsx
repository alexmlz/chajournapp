import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />

      <FormattedMessage
        id="switchDarkText"
        defaultMessage="Dunkel Modus"
      ></FormattedMessage>
    </HStack>
  );
};

export default ColorModeSwitch;
